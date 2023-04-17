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
            <form action="<%=path %>/membersList.action" method="post">
<strong> 账号:</strong><input name="lname" type="text" id="lname" style="width: 150px;"  />
<strong> 姓名:</strong><input name="mname" type="text" id="mname" style="width: 150px;"  />
<strong> 手机号码:</strong><input name="phone" type="text" id="phone" style="width: 150px;"  />

<input name="search" type="submit" border="0" class="btn btn-success btn-w-md "	value='搜索' />
</form>

        </td>
    </tr>
    <tr>
        <td>
            <pg:pager  url="membersList.action" items="${itemSize}" maxPageItems="${pageItem}"
                       maxIndexPages="${pageItem}" isOffset="${true}" export = "offset,currentPageNumber=pageNumber"  scope ="request" >
            
    <table style="width:100%;text-align: center" id="show_tab">
        <thead>
        <tr>
        <td >账号</td>
        <td >登录密码</td>
        <td >姓名</td>
        <td >手机号码</td>
        <td >Email</td>
        <td >联系地址</td>
        <td >注册时间</td>
        <td>操作</td>
</tr>

        </thead>
        <tbody>
        <c:forEach items="${membersList}" var="members" varStatus="status" >
        <tr>
        <td>${members.lname}</td>
        <td>${members.password}</td>
        <td>${members.mname}</td>
        <td>${members.phone}</td>
        <td>${members.email}</td>
        <td>${members.address}</td>
        <td>${members.addtime}</td>
<td>
        <a href="<%=path %>/tomembersView.action?id=${members.lname}" class="cu-tag bg-cyan light "><i class="glyphicon glyphicon-zoom-in"></i>详细</a>&nbsp;
        <a href="<%=path %>/tomembersEdit.action?id=${members.lname}" class="cu-tag bg-green light "><i class="glyphicon glyphicon-pencil"></i>编辑</a>&nbsp;
        <a href="javascript:void(0)" onclick="layer.confirm('您确定要删除吗？',{icon:3,title:'提示'},function(index){
            layer.close(index);
            window.location.href='<%=path %>/membersDel.action?id=${members.lname}';
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



