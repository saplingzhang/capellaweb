#!/bin/bash
# Git远程仓库设置脚本
# 使用方法：将此脚本中的 YOUR_REPO_URL 替换为实际的仓库地址后执行

echo "=== Git远程仓库设置脚本 ==="
echo "1. 请先创建远程仓库（GitHub/GitLab/Gitee等）"
echo "2. 复制仓库URL"
echo "3. 执行以下命令："
echo ""

echo "# 添加远程仓库"
echo "git remote add origin YOUR_REPO_URL"
echo ""

echo "# 推送代码到远程仓库"
echo "git push -u origin main"
echo ""

echo "=== 示例URLs格式 ==="
echo "GitHub: https://github.com/username/capellaweb.git"
echo "GitLab: https://gitlab.com/username/capellaweb.git"  
echo "Gitee:  https://gitee.com/username/capellaweb.git"
echo ""

echo "=== 当前本地仓库状态 ==="