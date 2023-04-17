<%@ page language="java"  pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib uri="http://jsptags.com/tags/navigation/pager" prefix="pg"  %> 
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


                            <table style="width: 100%;text-align: center">
    <tr>
        <td>
            <form action="<%=path %>/helpsList.action" method="post">
<strong> 标题:</strong><input name="htitle" type="text" id="htitle" style="width: 150px;"  />

<input name="search" type="submit" border="0" class="btn btn-success btn-w-md "	value='搜索' />
</form>

        </td>
    </tr>
    <tr>
        <td>
            <pg:pager  url="helpsList.action" items="${itemSize}" maxPageItems="${pageItem}"
                       maxIndexPages="${pageItem}" isOffset="${true}" export = "offset,currentPageNumber=pageNumber"  scope ="request" >
            
    <table style="width:100%;text-align: center" id="show_tab">
        <thead>
        <tr>
        <td >标题</td>
        <td >内容</td>
        <td >发布时间</td>
        <td>操作</td>
</tr>

        </thead>
        <tbody>
        <c:forEach items="${helpsList}" var="helps" varStatus="status" >
        <tr>
        <td>${helps.htitle}</td>
        <td>${fn:substring(helps.hdetail, 0, 30)}</td>
        <td>${helps.addtime}</td>
<td>
        <a href="<%=path %>/tohelpsView.action?id=${helps.hid}" class="cu-tag bg-cyan light "><i class="glyphicon glyphicon-zoom-in"></i>详细</a>&nbsp;
        <a href="<%=path %>/tohelpsEdit.action?id=${helps.hid}" class="cu-tag bg-green light "><i class="glyphicon glyphicon-pencil"></i>编辑</a>&nbsp;
        <a href="javascript:void(0)" onclick="layer.confirm('您确定要删除吗？',{icon:3,title:'提示'},function(index){
            layer.close(index);
            window.location.href='<%=path %>/helpsDel.action?id=${helps.hid}';
        });" class="cu-tag bg-red light "><i class="glyphicon glyphicon-remove"></i>删除</a>&nbsp;
        </td>
        </tr>

        </c:forEach>
        </tbody>
    </table>





        </td>
    </tr>
    <tr>
        <td>
            <pg:index>	<jsp:include page="/common/pagination_tag.jsp" flush="true" />	</pg:index>	</pg:pager>
        </td>
    </tr>
</table>





                        </div>
                    </div>
                </div>
            </div>
        </div>





    </div>
</main>



  </body>
</html>



