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


                            <form  action="<%=path %>/goodsAdd.action" method="post" id="form1">
    <table style="width: 100%;" >
        
<tr><td  style="text-align:right; width:20%;">
<font style='color:red'>*&nbsp;</font>商品分类:</td><td>
<select name="tyid" style="width:200px" >
<c:forEach items="${goodstypeList}" var="goodstype" varStatus="status" >
<option value="${goodstype.tyId}">${goodstype.tyname}</option>
</c:forEach>
</select>

 </td></tr>

<tr><td  style="text-align:right; width:20%;">
<font style='color:red'>*&nbsp;</font>商品名称:</td><td>
<input name="gtitle" type="text" id="gtitle" style="width: 200px;" required />
 </td></tr>

<tr><td  style="text-align:right; width:20%;">
<font style='color:red'>*&nbsp;</font>商品图片:</td><td>
<script type="text/javascript" src="<%=path%>/admin/js/popup_shuaxin_no.js"></script>
<script language="javascript">

    function up2()
    {
        var pop=new Popup({ contentType:1,isReloadOnClose:false,width:400,height:200});
        pop.setContent("contentUrl","<%=path%>/upfile/upload1.jsp");
        pop.setContent("title","文件上传");
        pop.build();
        pop.show();
    }
</script>
<input type="text" name="photo" id="fujian" size="50" readonly="readonly" />
<input type="button" value="上传" onclick="up2()" />
 </td></tr>

<tr><td  style="text-align:right; width:20%;">
<font style='color:red'>*&nbsp;</font>商品产地:</td><td>
<input name="address" type="text" id="address" style="width: 200px;" required />
 </td></tr>

<tr><td  style="text-align:right; width:20%;">
<font style='color:red'>*&nbsp;</font>价格:</td><td>
<input name="price" type="text" id="price" style="width: 200px;" required />
 </td></tr>

<tr><td  style="text-align:right; width:20%;">
<font style='color:red'>*&nbsp;</font>商品描述:</td><td>
<link rel="stylesheet" href="<%=path %>/kindeditor/themes/default/default.css" />
<link rel="stylesheet" href="<%=path %>/kindeditor/plugins/code/prettify.css" />
<script charset="utf-8" src="<%=path %>/kindeditor/kindeditor.js"></script>
<script charset="utf-8" src="<%=path %>/kindeditor/lang/zh_CN.js"></script>
<script charset="utf-8" src="<%=path %>/kindeditor/plugins/code/prettify.js"></script>
<script>
    KindEditor.ready(function(K) {
        var editor1 = K.create('textarea[name="gmemo"]', {
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
<textarea id="gmemo"  name="gmemo" cols="100" rows="8" style="width:700px;height:400px;visibility:hidden;"></textarea>
 </td></tr>

<tr><td  style="text-align:right; width:20%;">
<font style='color:red'>*&nbsp;</font>商品状态:</td><td>
<input type="radio" name="gflag"  value ="上架"  checked="checked"  />上架
<input type="radio" name="gflag" value ="下架"  />下架

 </td></tr>


        <tr>
            <td>&nbsp;</td>
            <td align="left">
                <input type="submit" name="btnAdd" value="添 加"      class="btn btn-success btn-w-md " />
                <input name="btnReturn" type="button" value="返 回"   class=" btn btn-yellow btn-w-md"  onclick="location.href='<%=path %>/goodsList.action';"  />
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



