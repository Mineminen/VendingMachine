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
            <form action="<%=path %>/goodsList.action" method="post">
<strong> 商品分类:</strong>
<select name="tyid" style="width:150px">
<option value="">请选择商品分类</option>
<c:forEach items="${goodstypeList}" var="goodstype" varStatus="status" >
<option value="${goodstype.tyId}"    >${goodstype.tyname}</option>
</c:forEach>
</select>

<strong> 商品名称:</strong><input name="gtitle" type="text" id="gtitle" style="width: 150px;"  />

<input name="search" type="submit" border="0" class="btn btn-success btn-w-md "	value='搜索' />
</form>

        </td>
    </tr>
    <tr>
        <td>
            <pg:pager  url="goodsList.action" items="${itemSize}" maxPageItems="${pageItem}"
                       maxIndexPages="${pageItem}" isOffset="${true}" export = "offset,currentPageNumber=pageNumber"  scope ="request" >
            
    <table style="width:100%;text-align: center" id="show_tab">
        <thead>
        <tr>
        <td >ID</td>
        <td >商品分类</td>
        <td >商品名称</td>
        <td >商品图片</td>
        <td >商品产地</td>
        <td >价格</td>
        <td >商品描述</td>
        <td >商品状态</td>
        <td>操作</td>
</tr>

        </thead>
        <tbody>
        <c:forEach items="${goodsList}" var="goods" varStatus="status" >
        <tr>
        <td>${goods.gid}</td>
        <td>${goods.tyname}</td>
        <td>${goods.gtitle}</td>
        <td><img  src="<%=path %>/${goods.photo}" width="80"  height="80" /></td>
        <td>${goods.address}</td>
        <td>${goods.price}</td>
        <td>${fn:substring(goods.gmemo, 0, 30)}</td>
        <td>${goods.gflag}</td>
<td>
        <a href="<%=path %>/togoodsView.action?id=${goods.gid}" class="cu-tag bg-cyan light "><i class="glyphicon glyphicon-zoom-in"></i>详细</a>&nbsp;
        <a href="<%=path %>/togoodsEdit.action?id=${goods.gid}" class="cu-tag bg-green light "><i class="glyphicon glyphicon-pencil"></i>编辑</a>&nbsp;
        <a href="javascript:void(0)" onclick="layer.confirm('您确定要删除吗？',{icon:3,title:'提示'},function(index){
            layer.close(index);
            window.location.href='<%=path %>/goodsDel.action?id=${goods.gid}';
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



