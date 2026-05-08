module.exports = {
    // 继承基础规则
    extends: ['eslint:recommended', 'react-app'],
    // 自定义规则（示例：关闭未使用变量警告）
    rules: {
        'no-unused-vars': 'off',
        'indent': ['error', 2], // 统一2空格缩进
        'quotes': ['error', 'single'] // 统一单引号
    }
};