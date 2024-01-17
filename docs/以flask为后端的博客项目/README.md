---
title: 以flask为后端的博客项目
date: 2024-01-10
sidebar: 'auto'
categories:
 - 项目
tags:
 - flask
publish: true
---

::: tip
该项目是基于flask框架为后台以及vue等前端框架搭建的前后端分离的博客项目,
:::

<!--more-->


> pyqt6学习二


---

# 前言
之前简单的学习了PyQt6，本章继续学习

---
# 一、接口测试与爬虫程序

## 1.1. flask服务端

```python
from flask import request, Flask
import pandas as pd
import json

app = Flask(__name__)


@app.route("/")
def index():
    return "Hello World!"


@app.route("/query/<sno>")
def query(sno):
    token = request.headers.get('token', "")
    if not token or token != "wht":
        return "拒绝访问"
    sno = str(sno).strip()
    df = pd.read_csv("csdn_paqu.csv")
    df_result = df[df["name"] == sno]
    if len(df_result) == 1:
        return json.dumps(df_result.iloc[0].to_dict(), ensure_ascii=False)
    else:
        return "no result"


@app.route("/add_article", methods=['POST'])
def add_article():
    token = request.headers.get('token', "")
    if not token or token != "wht":
        return "拒绝访问"
    print(request.data)
    data = json.loads(request.data)
    df_source = pd.read_csv("csdn_paqu.csv")

    datas = {
        "type": [data["type"]],
        "href": [data["href"]],
        "name": [data["name"]],
        "date": [data["date"]],
        "read_num": [data["read_num"]],
    }
    if len(df_source[df_source["name"] == data["name"]]) > 0:
        return "error: 这篇文章已经存在了"
    df = pd.DataFrame.from_dict(datas)
    pd.concat([df_source, df]).to_csv("csdn_paqu.csv", index=False)
    return "success"


# type,href,name,date,read_num
app.run(host='0.0.0.0')

```








## 1.2. api接口测试

> 先设计页面

![在这里插入图片描述](https://img-blog.csdnimg.cn/11120858a28a479884cafca66091cbf3.png)



> 实现爬虫接口程序

```python
from PyQt6.QtWidgets import (
    QApplication,QDialog,QMessageBox
)
from api_post import Ui_ApiPost
import sys
import json
import requests
class my_apipost(QDialog,Ui_ApiPost):
    def __init__(self):
        super().__init__()
        self.setupUi(self)
        self.show()
        self.pushButton_submit.clicked.connect(self.do_submit)

    def do_submit(self):
        method = self.comboBox_method.currentText()
        url = self.lineEdit_url.text()
        headers = self.textEdit_headers.toPlainText()
        params = self.textEdit_params.toPlainText()
        data = self.textEdit_data.toPlainText()
        if not method:
            QMessageBox.warning(self,'警告','请选择请求方式')
            return
        if not url:
            QMessageBox.warning(self,'警告','请输入url')
            return
        if headers:
            try:
                headers = json.loads(headers) #将json字符串转换回python字典对象
            except Exception as e:
                QMessageBox.warning(self,'警告',f'headers解析错误：{e}')
                return
        else:
            headers = {}

        if params:
            try:
                params = json.loads(params) #将json字符串转换回python字典对象
            except Exception as e:
                QMessageBox.warning(self,'警告',f'params解析错误：{e}')
                return
        else:
            params = {}

        if data:
            try:
                data = json.loads(data) #将json字符串转换回python字典对象
            except Exception as e:
                QMessageBox.warning(self,'警告',f'data解析错误：{e}')
                return
        else:
            data = {}

        if method == 'GET':
            r = requests.get(url,headers=headers,params=params)
        elif method == 'POST':
            r = requests.post(url,headers=headers,params=params,data=json.dumps(data))
        else:
            QMessageBox.warning(self,'警告','请选择请求方式')
            return
        code = r.status_code
        text = r.text
        result = ""
        result += f"code: {code} \n\n"
        result+= f"text: {text} \n\n"
        self.textEdit_response.setText(result)



if __name__ == '__main__':
    app = QApplication(sys.argv)
    my_apipost = my_apipost()
    sys.exit(app.exec())

```

> GET请求，获取文章信息

![在这里插入图片描述](https://img-blog.csdnimg.cn/eddb6f9fb55845558884f60675145ad1.png)

> POST请求，向csv文件中添加新文章信息。

![在这里插入图片描述](https://img-blog.csdnimg.cn/72e5856a406e49b6a9778b936d4808f4.png)
添加成功：
![在这里插入图片描述](https://img-blog.csdnimg.cn/3731412c36094fceb632b16873b27fa1.png)


> 额外，还可以获取别的url的内容。

![在这里插入图片描述](https://img-blog.csdnimg.cn/8bc69ef7a5984d34906aac7a7c2161e9.png)





---

# 总结
本章主要学习了如何在本机上通过界面程序测试一下在flask服务端的api接口。（API接口是在Flask服务端定义的，而程序界面是用于测试API接口）。

好雨知时节，当春乃发生。

--2023-11-4	进阶篇
