@echo off
REM Git远程仓库设置脚本 (Windows版本)
echo ====================================
echo Git远程仓库设置向导
echo ====================================
echo.

echo 第1步：创建远程仓库
echo - 访问 https://github.com/new 
echo - 仓库名建议：capellaweb
echo - 不要勾选初始化选项
echo.

echo 第2步：复制仓库URL后，执行以下命令：
echo.

echo git remote add origin [你的仓库URL]
echo git push -u origin main
echo.

echo ====================================
echo 示例仓库URL格式：
echo GitHub: https://github.com/用户名/capellaweb.git
echo GitLab: https://gitlab.com/用户名/capellaweb.git
echo Gitee:  https://gitee.com/用户名/capellaweb.git
echo ====================================
echo.

echo 当前本地仓库已准备就绪！
git status
echo.
echo 按任意键继续...
pause >nul