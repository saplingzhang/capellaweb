# Git 远程仓库自动配置脚本
param(
    [Parameter(Mandatory=$true)]
    [string]$RepoUrl
)

Write-Host "=== Git 远程仓库配置脚本 ===" -ForegroundColor Green
Write-Host "仓库URL: $RepoUrl" -ForegroundColor Yellow

try {
    Write-Host "`n第4步：添加远程仓库地址..." -ForegroundColor Blue
    git remote add origin $RepoUrl
    Write-Host "✅ 远程仓库添加成功！" -ForegroundColor Green
    
    Write-Host "`n第5步：推送代码到远程仓库..." -ForegroundColor Blue  
    git push -u origin main
    Write-Host "✅ 代码推送成功！" -ForegroundColor Green
    
    Write-Host "`n=== 配置完成 ===" -ForegroundColor Green
    Write-Host "验证远程仓库配置：" -ForegroundColor Yellow
    git remote -v
    
    Write-Host "`n🎉 所有Git配置任务已完成！" -ForegroundColor Green
    Write-Host "你的项目现在已经成功提交到Git仓库了。" -ForegroundColor Cyan
}
catch {
    Write-Host "❌ 配置过程中出现错误: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "请检查仓库URL是否正确，以及是否有推送权限。" -ForegroundColor Yellow
}

# 使用方法示例：
# .\setup-git-remote.ps1 -RepoUrl "https://github.com/用户名/capellaweb.git"