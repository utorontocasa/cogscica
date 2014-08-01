# Markdown
Refer [here](http://daringfireball.net/projects/markdown/syntax)
and [here](http://assemble.io/docs/Cheatsheet-Markdown.html) as needed. 
Briefly:

* html is allowed
* paragraphs denoted by blank lines
* line break denoted by two blank spaces at the end of a line
* emphasis denoted with `*` or `_`:
  + _italics_:
      - `*italics*`, or
      - `_italics_`  
  + **bold**:
      - `**bold**`, or
      - `__bold__` 
  + _**both**_:
      - `***both***`, or
      - `_**both**_`, or
      - `*__both__*`, or
      - `___both___`
* headers denoted by:
  + underlining with a string of `=`'s (h1) or `-`'s (h2), or
  + prefixing line with `#` (h1) through `######` (h6)
* lists:  
  + start each line with `*`, `+`, `-`, or `1.`
  + end with a blank line
  + can be nested (indent by 2 spaces)
* blockquotes:
  + start each line with `>`
  + can be nested
* code (or any text to be rendered literally) can be denoted by:
  + enclosing it in ` (backtick), or 
  + indenting it by 4 spaces
  + can nest in lists, etc.
* horizontal rules denoted by using three or more of `*`, `-`, or `_`
* links can be:
  * automatic: `<http://example.com/>`
      + link text and address are the same
  * in-line: `[Link Text] (Address) "Optional Title"`
      + `(Address)` can be absolute `(http://example.com)` or relative `(/about/)`
  * reference: `[Link Text] [id]` and `[id]: http://example.com "Optional Title"`
      + `[id]` is not case-sensitive
      + if left empty, `[id]` uses `[Link Text]`