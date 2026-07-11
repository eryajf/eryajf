<img src="https://my-badges.github.io/my-badges/fix-2.png" alt="I did 2 sequential fixes." title="I did 2 sequential fixes." width="128">
<strong>I did 2 sequential fixes.</strong>
<br><br>

Commits:

- <a href="https://github.com/eryajf/dbx/commit/de7f2fe6b6ffc2faf55e4e2235e0182099879255">de7f2fe</a>: fix(editor): 修复SQL快捷执行导致执行全量SQL的问题 (#2384)

- 将执行SQL语句的逻辑从直接请求改为通过事件发射
- 增强了代码的可扩展性和可维护性
- <a href="https://github.com/eryajf/dbx/commit/c2cc9f22cfe996ee1349b1d04f42ac2e45c3546e">c2cc9f2</a>: fix(connection): 复制连接时保持在同一组内

- 修改 `addConnection` 方法以支持指定目标组 ID
- 更新 `duplicateConnection` 函数以传递目标组 ID
- 添加测试用例以验证复制连接的功能


Created by <a href="https://github.com/my-badges/my-badges">My Badges</a>