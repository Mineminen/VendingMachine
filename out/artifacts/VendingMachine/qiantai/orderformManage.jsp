<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib uri="http://jsptags.com/tags/navigation/pager" prefix="pg"  %>

<%
String path = request.getContextPath();
String basePath = request.getScheme() + "://"+ request.getServerName() + ":" + request.getServerPort()+ path + "/";
%>

<jsp:include flush="true" page="/qiantai/head.jsp"></jsp:include>


<main>
    	<div class="breadcrumb-area">
    		<div class="container">
    			<div class="row">
    				<div class="col-xl-12">
    					<div class="bz-breadcrumb-wrap d-flex justify-content-between align-items-center">
    						<div class="bz-breadcrumb-content">
    							<h3 class="bz-breadcrumb-content-title">
    								我的订单
    							</h3>
    						</div>
    						<div class="bz-breadcrumb-list">
    							<a href="<%=path%>/index.action">
    								网站首页
    							</a>
    							<span>
    								我的订单
    							</span>
    						</div>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    	<div class="shop-area">
    		<div class="container">
    			<div class="row">
    				<div class="col-xl-12">
    					<div class="tab-content" id="nav-product-tabContent">
    						<div class="tab-pane fade show active" id="nav-grid" role="tabpanel" aria-labelledby="nav-grid-tab">
    							<div class="shop-grid-product-tab-wrapper">
    								<div class="row">
    									
									 <jsp:include flush="true" page="/qiantai/menu.jsp"></jsp:include>
	                                    
    									<div class="col-xl-9 col-lg-9">
    										<div class="row pt-10 pb-10">
    											
    											
	                                            <table style="width: 100%;text-align: center">
    <tr>
        <td>
            <form action="<%=path %>/orderform_Manage.action" method="post">
<strong> 订单编号:</strong><input name="no" type="text" id="no" style="width: 150px;"  />


<input name="search" type="submit" border="0" class="button"	value='搜索' />
</form>

        </td>
    </tr>
    <tr>
        <td>
                <pg:pager  url="orderform_Manage.action" items="${itemSize}" maxPageItems="${pageItem}"
               maxIndexPages="${pageItem}" isOffset="${true}" export = "offset,currentPageNumber=pageNumber"  scope ="request" >
    <table style="width:100%;text-align: center">
        <tr>
		<tr>
			<td >订单编号</td>
			<td >账号</td>
			<td >订单金额</td>
			<td >提交时间</td>
			<td >订单状态</td>
			<td>操作</td>
		</tr>

		</thead>
		<tbody>
		<c:forEach items="${orderformList}" var="orderform" varStatus="status" >
			<tr>
				<td>${orderform.no}</td>
				<td>${orderform.lname}</td>
				<td>${orderform.omoney}</td>
				<td>${orderform.otime}</td>
				<td>${orderform.oflag}</td>
<td>
        <a href="<%=path %>/orderform_Show.action?id=${orderform.no}">详细</a>&nbsp;





        </td>
        </tr>

        </c:forEach>
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
    				</div>
    			</div>
    		</div>
    	</div>
    </main>




<jsp:include flush="true" page="/qiantai/foot.jsp"></jsp:include>


