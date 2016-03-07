# generator-ss-ansible

## 準備

```
npm install -g yo
```

## インストール

```
$ git clone https://github.com/suzuki-shunsuke/generator-ss-ansible.git node_modules/generator-ss-ansible
$ yo ss-ansible
```

## ディレクトリ構成

```
production  # サンプルInventoryファイル
group_vars/
  グループ名  # グループ固有の変数を記述
host_vars/
  ホスト名  # ホスト固有の変数を記述
site.yml  # メインPlaybook
webservers.yml  # Webサーバ用のPlaybook
roles/
  common/
    tasks/
      main.yml
    handlers/
      main.yml
    templates/  # コピーするテンプレート群
    files/  # コピーするファイル群
    vars/  # ロール固有の変数
    defaults/
    meta/
```


## Roleの単位

- http://qiita.com/hnakamur/items/63f2d94badf89246e04a
- Ansibleのroleは単にインクルードの単位
- nginx, mysqlといった単位でroleを定義するのが良い
- mysql/clientのように階層的なrole名を用いることも可能

