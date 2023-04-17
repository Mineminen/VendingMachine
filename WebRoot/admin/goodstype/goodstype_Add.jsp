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


                            <form  action="<%=path %>/goodstypeAdd.action" method="post" id="form1">
    <table style="width: 100%;" >
        
<tr><td  style="text-align:right; width:20%;">
<font style='color:red'>*&nbsp;</font>分类名称:</td><td>
<input name="tyname" type="text" id="tyname" style="width: 200px;" required />
 </td></tr>


        <tr>
            <td>&nbsp;</td>
            <td align="left">
                <input type="submit" name="btnAdd" value="添 加"      class="btn btn-success btn-w-md " />
                <input name="btnReturn" type="button" value="返 回"   class=" btn btn-yellow btn-w-md"  onclick="location.href='<%=path %>/goodstypeList.action';"  />
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



