A starter kit for vs code whit eslint and prettier ready on save file

## Configuration

- execute that comand : 
```
npm i
npx eslint --init
```

- choose that response :
```
√ How would you like to use ESLint? · style       
√ What type of modules does your project use? · esm
√ Which framework does your project use? · none
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · browser
√ How would you like to define a style for your project? · guide
√ Which style guide do you want to follow? · airbnb      
√ What format do you want your config file to be in? · JSON (<-- !important)
```

- in .eslintrc.json copy that config :
```
{
    "root": true,
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb-base",
        "prettier"

    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "ignorePatterns": ["dist", "node_modules"],
    "plugins": ["prettier"],
    "rules": {
        // "prettier/prettier": "error",
        "prettier/prettier": ["error",
        {
            "endOfLine": "auto"
        }
        ],

        "max-len": [
            "warn",
            {
                "code": 120
            }
        ],
        "no-console": "off",
        "arrow-body-style": "off",
        "arrow-parens": "off",
        "object-curly-newline": "off",
        "func-names": "off",
        "prefer-template": "off",
        "no-mixed-spaces-and-tabs": ["off", "smart-tabs"],
        // "indent": ["warn", 4],
        "linebreak-style": 0,
        "quotes": [
            "off",
            "single",
            {
                "avoidEscape": true,
                "allowTemplateLiterals": true
            }
        ],
        "no-unused-vars": "warn",
        "no-plusplus": [
            "error",
            {
                "allowForLoopAfterthoughts": true
            }
        ],
        "class-methods-use-this": "off",
        "no-useless-constructor": "warn",

        //"indent": ["error", 4, { "SwitchCase": 1 }]
        "indent": "off"
    }
}
```
## Try

change src/hello-world.js, save the file and se how eslint and prettier change format
