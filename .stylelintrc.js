module.exports = {
    extends: ['stylelint-config-html', 'stylelint-config-recess-order', 'stylelint-config-standard-scss', 'stylelint-config-standard-vue/scss'],
    customSyntax: 'postcss-html',
    overrides: [
        {
            files: ['*.vue', '**/*.vue'],
            rules: {
                'at-rule-no-unknown': [
                    true,
                    {
                        ignoreAtRules: ['extends', 'tailwind', 'layer', 'apply'],
                    },
                ],
            },
        },
    ],
    rules: {
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: ['extends', 'tailwind', 'layer', 'apply'],
            },
        ],
        'block-no-empty': null,
        'declaration-block-trailing-semicolon': null,
        'no-descending-specificity': null,
    },
};
