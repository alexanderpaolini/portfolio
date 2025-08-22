---
title: "Journaling"
published: 2025/08/21
description: >-
  How I'm using typst for my daily journal
slug: journaling
---

A few weeks ago I had the idea to start journaling. Not because I want to be particularly honest with myself or in tune with my emotions -- not that those aren't nice ancillary goals -- but to reinforce my weak memory and keep track of what happened when. My memory isn't that great. Unless I'm trying to remember something, I likely will forget, or at the very least it will slip my mind. I lose track of dates; I have no idea what happened when; I even forget small events.

Oftentimes I'll be with friends and they being up a specific event -- maybe watching a show, or going to minigolf -- and I have souch a hard time remembering what exactly happened. My goal with this journal is to keep track of whats happening. As a bonus, it would be nice to be able to read or present in the future.

## Requirements

Knowing myself decently well, I have a few requirements for this project.

Most importantly it must be **easy to use**. I know I'm very lazy. Any barrier of entry and I'll make up some excuses: "Oh I'll just do it tomorrow"; "I can skip weekends"; "It'll take too long".

It has to be **transferable**. This is more of a preference but it goes hand in hand with ease of use. I want to be able to write whether I'm on my phone or my laptop, or my PC.

Last but not least, it needs to **render** well. When I finish an entry I want to be able to render it into a beautiful document.

**To Summarize**:

- Easy to use
- Transferable
- Needs to render

## A Possible Solution

I've recently started using [typst](https://typst.app/) to type up documents. I started with my resume, then I retyped my [CS1 review](https://github.com/alexanderpaolini/cs1-review). Its pretty nice as an alternative to Latex, especially since it renders small documents in miliseconds.

I drafted the document below to test it out.

```typ
#set document(
  author: "Alexander Paolini",
  title: "Journal",
  description: "Alexander Paolni's Journal",
)

#set page(
  paper: "us-letter",
  margin: (x: 1in, y: 1in),
)

#set text(
  font: "New Computer Modern",
)

= Journal

Compiled on #datetime.today().display()

#pagebreak()

= Saturday, August 16th

This is an example journal entry.
```

I can write my journal using this as is. It looks nice and each entry has its own page. You can see the preview [here](/assets/journaling-ex1.pdf). The only thing its lacking is a table of contents.

For the table of contents I wanted to be able to view it in a calander-like grid. I can do that like this

```typ
== 2025

#grid(
  columns: 2,
  gutter: 16pt,
  [
    === August
    #table(
      columns: 7,
      stroke: 1pt,
      inset: 6pt,
      [Sun], [Mon], [Tue], [Wed], [Thu], [Fri], [Sat],
      [], [], [], [], [], [1], [2],
      [3], [4], [5], [6], [7], [8], [9],
      [10], [11], [12], [13], [14], [15], [*16*],
      [17], [18], [19], [20], [21], [22], [23],
      [24], [25], [26], [27], [28], [29], [30],
      [31], [], [], [], [], [], [],
    )
  ],
)
```

[This](/assets/journaling-ex2.pdf) looks very pretty nice. The grid tiles the months left -> right, left -> right.

And I can make the dates with entries links to the entries as well as making the links purple.

```typ
// Style links to purple
#show link: it => {
  text(it, fill: purple)
}

// In the calender
#link(<2025-08-16>)[16]

// On the page header
= Saturday, August 16th<2025-08-16>
```

And the final product can be seen in the [final product PDF](/assets/journaling-ex3.pdf).

## Multi-File Support (Or Lack Thereof)

One **major** issue with this strategy is that every entry must be in the same file. I really don't want to do that. Ideally I can sit down and just start typing without navigating to the end of the file and doing some formatting. Typst doesn't have support for reading directories quite yet, but there are a few workarounds to use. The one I will use is using a pythons script to create a `.typ` file and run the `typst compile content.typ` command. This isn't a beautiful approach but it let me automatically generate the calander with links too[^1].

*Note*: For brevity I won't include self-explanatory functions in this post. The full script can be found [here](/assets/journaling-example.zip).

I can store templates for the main file itself and each entry in different `.typ` files, and replace placeholder variables with the required content.

For example, each entry will look like this

```typ
= {{HEADING}}

#line(length: 100%)

{{BODY}}

#pagebreak()
```

The script itself:

```py
#!/usr/bin/env python3
CONTENT_DIR = "./content"
TEMPLATE_FILE_MAIN = "templates/template.typ"
TEMPLATE_FILE_ENTRY = "templates/entry.typ"
OUTPUT_FILE = "content.typ"
OUTPUT_PDF = "out.pdf"

def main():
    pages = []
    dates = []

    # get all .typ files in content dir, sorted
    files = [f for f in sorted(os.listdir(CONTENT_DIR)) if f.endswith(".typ")]
    
    # load entry template used for each page
    with open(TEMPLATE_FILE_ENTRY, "r") as f:
        entry_template = f.read()

    # build each page from its file
    for i, fname in enumerate(files):
        with open(os.path.join(CONTENT_DIR, fname), "r") as f:
            content = f.read().strip()

        # parse date and make heading
        date = parse_date_from_filename(fname)
        heading = format_heading(date)

        # fill entry template placeholders
        page = (
            entry_template[:]
            .replace("{{HEADING}}", heading)
            .replace("{{BODY}}", content)
        )

        pages.append(page)
        dates.append(date)

    # load main template that holds calendar + all content
    with open(TEMPLATE_FILE_MAIN, "r") as f:
        template = f.read()

    # insert calendar grid and compiled pages
    filled = template.replace("{{CALENDER}}", make_calendar_grid(dates))
    filled = filled.replace("{{CONTENT}}", "\n".join(pages))

    # write final typst file
    with open(OUTPUT_FILE, "w") as f:
        f.write(filled)

    print(f"Wrote {OUTPUT_FILE}")

    # compile typst file into pdf
    os.system(f"typst compile {OUTPUT_FILE} {OUTPUT_PDF}")
    print(f"Compiled {OUTPUT_FILE} to {OUTPUT_PDF}")


if __name__ == "__main__":
    main()
```

The basics of this is that all I need to do is read the files to get the content, fill out the template for each of the pages, render the calender table of contents, and then compile the file.

All that's left is creating the calander part. Unfortnately this is a bit more complicated. The file names leave me with essentially a list of dates. So in order to group by year and month I need some disgusting nested code (I know I know its disgusting). If I group all days by month and year, then using python's calander function I can create the grid for each month, with each date in `dates` being add as a link.

```py
GRID_TEMPLATE = """
#grid(
  columns: 2,
  gutter: 16pt,
  {tables}
)"""

YEAR_TEMPLATE = """
== {year}

{content}"""

TABLE_TEMPLATE = """
[
  === {month_name}
  #table(
    columns: 7,
    stroke: 1pt,
    inset: 6pt,
    [Sun], [Mon], [Tue], [Wed], [Thu], [Fri], [Sat],
{rows}
  )
]"""

def make_calendar_grid(dates):
    # group dates by year and month
    years = defaultdict(lambda: defaultdict(list))
    for d in dates:
        years[d.year][d.month].append(d)

    # year blocks hold all of the tables for every year
    year_blocks = []

    for year in sorted(years):
        # month tables holds all the tables for every month in a year
        month_tables = []

        for month in sorted(years[year]):
            # all dates in this month that should be linked
            month_dates = years[year][month]
            # build calendar weeks starting on sunday
            cal = calendar.Calendar(calendar.SUNDAY)

            rows = []
            for week in cal.monthdayscalendar(year, month):
                # build row with either empty cell, linked date, or plain date
                week_cells = [
                    "[]" if day == 0
                    else (
                      f"[#link(<{datetime.date(year, month, day).isoformat()}>)[{day}]]"
                      if datetime.date(year, month, day) in month_dates
                      else f"[{day}]")
                    for day in week
                ]
                # indent row nicely for table formatting
                rows.append("      " + ", ".join(week_cells) + ",")

            # fill in table template for this month
            table_code = TABLE_TEMPLATE.format(
                month_name=calendar.month_name[month],
                rows="\n".join(rows)
            )
            month_tables.append(table_code)

        # combine all month tables into a grid for the year
        year_blocks.append(
            YEAR_TEMPLATE.format(
                year=year,
                content=GRID_TEMPLATE.format(tables=",\n  ".join(month_tables))
            )
        )

    # return all year blocks joined together
    return "\n".join(year_blocks)
```

The reason I do templating differently in the different parts of the script is because I don't think the `.typ` files shouldn't be treated as python strings. Instead placeholders should be removed. However, python has builtin formatting that I can use for the other templating.

When put together the script generates a nice enough looking pdf that satisfies my prior requirements. It is easy to use; transferrable because entries are purely text in a git repo; and and it renders to a pdf.

You can find an example zip [here](/assets/journaling-example.zip).

[^1]: Typst does have a very powerful scripting language but without support for reading directories its not even worth trying in my opinion.
