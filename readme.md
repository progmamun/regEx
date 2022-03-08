# my notes about: Regular expression

---

## Basics

- `/ expression / flags`, `/[A-Z]+/g` basic format
- `/ hello\?\*\\/` escape special characters with backslashes
- `()` group with parentheses
- `|` logical OR

## Character Classes

- `\w` word `\d` digit `\s` whitespace, tabs, line breaks
- `\w` NOT word `\D` NOT digit `\S` NOT whitespace
- `\t` tabs, `\n` line breaks
- `.` any character (except newline)

## Brackets

- `[xyz]` match any x, y, z
- `[J-Z]` match any capital letters between J & Z.
- `[^xyz]` NOT x, y, z
