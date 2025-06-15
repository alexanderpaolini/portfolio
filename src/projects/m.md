---
title: "The m Programming Language"
published: 2025/02/21
description: >-
  A simple python-like programming language build for Knight Hacks Project Launch 2025
slug: m-language
favor: 5
---

**Technologies:** Java  
**Repository:** [alexanderpaolini/m](https://github.com/alexanderpaolini/m)

The m Programming Language (yes, lowercase m) is a simple programming language that supports numbers and lists.

This programming language was my first attempt at creating a fully-featured programming language. The plan was originally to write the compiler in Java, and then compile to machine code or to a custom bytecode implementation. However, the scope changed throughout the project and we decided to make it interpreted instead.

The interpreter works in the following stages.

```txt
lexer -> parser -> semantic analyzer -> tree walk interpreter
```

## We didn't finish this project without any issues

**Working in groups is difficult**.

For a project at linear at an interpreter, working in a group is particularly difficult. Especially when the project gets increasingly more complex as it builds. i.e. the lexer is quite simple compared to the parser.

**The project itself is complex**.

The interpreter project is my no means a simple project. A modern website is much much simpler to build and maintain because of the tools people have already created.

Because the purpose of **m** is to learn about programming languages, we opted to not use generators like bison or antlr4[^1].

## Examples

The syntax looks like this:

```txt
# example1.m
!include "std/trig.m"
!include "std/constants.m"

alias sin std::trig:sin
alias cos std::trig::cos
alias pi std::constants::PI

main(): {
  for theta in range(1, 360): {
    radians = theta * pi / 180.0

    sin_val = sin(radians)
    cos_val = cos(radians)

    # prints angle, sin value, and cos value
    >> radians
    >> sin_val
    >> cos_val
  }
}
```

An example to compute fibonacci would look like this:

```txt
# example2.m
fib(n): {
  a = 0
  b = 1
  i = 0
  
  while (i < n): {
    temp = a
    a = b
    b = temp + b
    i = i + 1
  }
  
  a
}

main(): {
  # print fib(75)
  >> fib(75)
}
```

## Features

**m** supports many features such as:

**comments**:

```txt
# This is a comment
```

**printing to standard out**:

```txt
# This prints 5
>> 5 
```

**variables**:

```txt
x = 9 + 10
y = x + 1
l1 = [1, 2, 3, 4]
```

**block scopes**:

```txt
x = 1
{
  y = 2
  x = 2
}
>> x # Output: 1
>> y # error: 'y' is not defined
```

Block scopes also evaluate to the result of the last line.

```txt
x = {
  res = fib(7)
  res + 1
}
>> x # Output: 14
```

**control flow**:

If-statements use the following syntax:

```txt
if (conditional): statement
else: statement
```

Example:

```txt
x = some_function_call()
if (x > 7): {
  >> 0
} else: {
  >> 1
}
```

**functions**:

Functions use the syntax `name(paramaters...): statement`.

```txt
# A simple single-line function
f(x): x + 1

# A more complex block-statement function
g(x): {
  temp = f(x)
  temp + 1
}
```

**loops**:

While loops:

```txt
while (x): x = f(x)
```

For loops:

For loops, by design, only iterate over a list. This means the range function needs to be used to iterate over a set of integers.

```txt
for x in range(0, 10): {
  >> x
}
```

**namespaces**:

Namespaces hold functions and constants. They simplify creating modules and exporting code.

```txt
# Namespace declaration here
namespace std {
  namespace trig {
    sin(theta): # sin   calculation here 

    cos(theta): # cos   calculation here
  }
}

# ...
height = c * std::trig::sin(theta)
length = c * std::trig::cos(theta)
# ...
```

[^1]: bison and antlr4, although modern softwares that would make this project far simpler to build, defeat the purpose by generating the hard parts for us. This is by no means suggesting not to use these tools in any way, just for our intentions -- learning compiler design -- these tools do more harm than help.
