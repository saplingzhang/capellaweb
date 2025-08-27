# Git 远程仓库配置命令

## 当前项目状态
- ✅ 本地Git仓库已初始化
- ✅ 代码已提交到本地仓库
- ✅ 远程仓库已配置完成

## 第4步：添加远程仓库地址 ✅ 已完成
```bash
# 已执行：
git remote add origin https://github.com/saplingzhang/capellaweb.git
```

**示例仓库URL格式：**
- GitHub: `https://github.com/用户名/capellaweb.git`
- GitLab: `https://gitlab.com/用户名/capellaweb.git`
- Gitee: `https://gitee.com/用户名/capellaweb.git`

## 第5步：推送代码到远程仓库 ✅ 已完成
```bash
# 已执行：
git push -u origin main
```

## 验证远程仓库配置
```bash
# 查看远程仓库配置
git remote -v

# 查看分支状态
git branch -vv
```

## 完整执行流程
1. 在Git平台创建新仓库（不要初始化）
2. 复制仓库URL
3. 执行上述命令
4. 验证推送成功

## 如果遇到问题
- 确保仓库URL正确
- 确保有推送权限
- 如果是私有仓库，确保已配置SSH密钥或登录凭据