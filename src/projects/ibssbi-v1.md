---
title: "Incredibly Bad Super Simple Bytecode Interpreter (ibssbi) v1"
published: 2025/02/21
description: >-
  A bytecode interpreter I made to learn the process of creating a bytecode interpreter.
slug: ibssbi-v1
favor: 6
tags:
- bytecode
- assembly
- compiler
- c
---

**Technologies:** C  
**Repository:** [alexanderpaolini/ibssbi](https://github.com/alexanderpaolini/ibssbi)

Over this past winter I wanted to learn how to write a custom compiler. One of the steps was to create a bytecode interpreter (as opposed to learning a real implementation assembly).

The implementation mirrors a single stack machine with operations like `PUSH`, `POP`, `ADD`, etc.

To avoid repeating myself, specification can be found [here](https://github.com/alexanderpaolini/ibssbi/blob/main/spec.md)

## I learned a lot from this project

### Problem Solving

Most notabily, I had to change my way of thinking when trying to solve problems.

For example, the fibonacci function.

Because this is just a stack machine, I had to add create the fibonacci sequence on the stack, and then iterate **n** times. Obviously this is very different from any other implementation. Especially recursive approaches.

Step 1: n -> 1 -> 1

Step 2: n - 1 -> 1 -> 2

Step 3: ...

Step n: 0 -> F_{n-1} -> F_{n}

### Dealing with Binary Files

Prior to this project, I had never dealt with binary files. Obviosuly my **C** class had taught the `fopen(path, "rb")` method. But we had never used it.

First I had to create my file format. I decided on providing a file version number, the number of bytes of instructions, and then the instructions themselves.

```txt
VERSION_MAJOR VERSION_MINOR VERSION_PATCH
PROGRAM_SIZE
... instructions ...
```

The code:

```txt
PUSH 1
PUSH 2
ADD
PRINT_INT
HALT
```

Produces the following output bytes:

```txt
0x00 0x00 0x00 0x00 0x01 0x00
0x15 0x00 0x00 0x00
0x01 0x01 0x00 0x00 0x00 0x00 0x00 0x00 0x00 
0x01 0x02 0x00 0x00 0x00 0x00 0x00 0x00 0x00 
0x10
0xF1 
0xFF
```

As such, I created the following function:

```c
FILE *open_program(const char *filename)
{
    FILE *input = fopen(filename, "rb");

    if (input == NULL)
    {
        fprintf(stderr, "ERROR: COULD NOT OPEN INPUT FILE\n");
        exit(EXIT_FAILURE);
    }

    return input;
}
```

And then the `read_program` function:

```c
Program read_program(Header *header, FILE *input_file)
{
    Program program;
    program.header = header;

    program.instructions = (Byte *)(malloc(sizeof(Byte) * header->size));
    fread(program.instructions, sizeof(Byte), header->size, input_file);

    if (DEBUG)
    {
        printf("PROGRAM\t");
        for (int i = 0; i < header->size; i++)
        {
            printf("0x%02X ", program.instructions[i]);
        }
        printf("\n");
    }

    fclose(input_file);

    return program;
}
```

> Note: My bytecode does not conform to any instruction size, where each operation and its operands fits inside one word. This was most definitely an oversight. Going back, I would've changed this to prevent issues in branching.

## I Had Some Challenges

First off, I didn't know any assembly. I had no idea how to structure my bytecode. I came in with the idea to "make a bytecode interpreter" without knowing what makes a bytecode interpreter exactly that.

I chose not to align all instructions to a set word-size, and that cost me. Additionally, I hadn't considered registers, so writing any code became very difficult, if even possible at all.

Instead of writing simple code like:

```asm
start:
    ldi     t0  1
    ldi     t1  1
    add     s0  t0  t1
    print   s0
```

Which is still by no means any acceptable assembly. I chose to just create a stack machine. Translating code into a stack machine is difficult. Perhaps just because I didn't really know what I'm doing. Nonetheless, I couldn't create an assembler for a simple language.

## Would I do it again?

Yes.

I will most definitely do it again. Probably next winter.

Writing shoddy code is so much fun. A lot of programming is solving problems, and all of these problems were new to me. So I'll read a book. Study up. And then return to create a better bytecode interpreter. My own assembly language.
