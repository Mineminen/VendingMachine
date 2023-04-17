<%@ page language="java"  pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html xmlns="http://www.w3.org/1999/xhtml">
 <head>
 <jsp:include flush="true" page="${basePath}/admin/head.jsp"></jsp:include>     
 </head>
 
  <body>


        
     


<main class="layout-content">
    <div class="container-fluid" style="
    background-color: #f5f6fa;
    min-height: 400px;
">


        <div class="row">
            <div class="col-lg-12">
                <div class="card">

                    <div class="card-body">
                        <div class="table-responsive">


                            <form  action="<%=path %>/newsEdit.action" method="post"  id="form1">
    <table style="width: 100%;" >
        
<tr><td  style="text-align:right; width:20%;">
<font style='color:red'>*&nbsp;</font>标题:</td><td>
<input name="title" type="text" id="title" style="width: 200px;" required  value='${news.title}' />
 </td></tr>

<tr><td  style="text-align:right; width:20%;">
<font style='color:red'>*&nbsp;</font>内容:</td><td>
<link rel="stylesheet" href="<%=path %>/kindeditor/themes/default/default.css" />
<link rel="stylesheet" href="<%=path %>/kindeditor/plugins/code/prettify.css" />
<script charset="utf-8" src="<%=path %>/kindeditor/kindeditor.js"></script>
<script charset="utf-8" src="<%=path %>/kindeditor/lang/zh_CN.js"></script>
<script charset="utf-8" src="<%=path %>/kindeditor/plugins/code/prettify.js"></script>
<script>
    KindEditor.ready(function(K) {
        var editor1 = K.create('textarea[name="nmemo"]', {
            cssPath : '<%=path %>/kindeditor/plugins/code/prettify.css',
            uploadJson : '<%=path %>/kindeditor/jsp/upload_json.jsp',
            fileManagerJson : '<%=path %>/kindeditor/jsp/file_manager_json.jsp',
            allowFileManager : true,
            afterCreate : function() {
                var self = this;
                K.ctrl(document, 13, function() {
                    self.sync();
                    document.forms['example'].submit();
                });
                K.ctrl(self.edit.doc, 13, function() {
                    self.sync();
                    document.forms['example'].submit();
                });
            }
        });
        prettyPrint();
    });
</script>
<textarea id="nmemo"  name="nmemo" cols="100" rows="8" style="width:700px;height:400px;visibility:hidden;">${news.nmemo}</textarea>
 </td></tr>



        <tr>
            <td>&nbsp;</td>
            <td align="left">
                <input name="id" type="hidden"  value='<%= request.getParameter("id") %>'>
                <input type="submit" name="btnAdd" value="保 存"      class="btn btn-success btn-w-md " />
                <input name="btnReturn" type="button" value="返 回"   class=" btn btn-yellow btn-w-md"  onclick="history.go(-1);"  />
            </td>
        </tr>
    </table>
</form>




                        </div>
                    </div>
                </div>
            </div>
        </div>





    </div>
</main>



  </body>
</html>



