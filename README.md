# TechBlog
This is a temporary blog created for codeforsocialgood.com in order to present how to write lexer and parser for a new programming languge on js.

AST and language Inspiration : https://gist.github.com/linkin-park/afc905bbdf50e288bb78fc41c936c72d

Character Stream : A Stream Class , helper util for Lexer to generate tokens.
https://gist.github.com/linkin-park/f60f36e5e94b76232b2fea66cca43353

The Lexer:
1. Ignore Whitespace and comments
2. Return token if its string / number / identifer / punctuation / operator.
3. Throw error if none of the above
