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
    								商品
    							</h3>
    						</div>
    						<div class="bz-breadcrumb-list">
    							<a href="<%=path%>/index.action">
    								网站首页
    							</a>
    							<span>
    								商品
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
    									
										  <jsp:include flush="true" page="/qiantai/left.jsp"></jsp:include>
	                                    
    									<div class="col-xl-8 col-lg-8">
    										<div class="row pt-10 pb-10">
    											
	                                         
	                                          <div class="divlist">
    <ul>
        <pg:pager  url="goods_List.action" items="${itemSize}" maxPageItems="${pageItem}"
        maxIndexPages="${pageItem}" isOffset="${true}" export = "offset,currentPageNumber=pageNumber"  scope ="request" >
    <c:forEach items="${goodsList}" var="goods" varStatus="status" >
        
        <li class="widthk3">
            <a href="<%=path%>/goodsView.action?id=${goods.gid}"><img src="<%=path %>/${goods.photo}" style="width: 232px;height: 187px" /></a>
            <span class="wspan"><a href="<%=path%>/goodsView.action?id=${goods.gid}">${goods.gtitle}</a></span>
            <span>价格：<b style="color: red">${goods.price}</b> &nbsp;元</span>
        </li>
        
    </c:forEach>  
    </ul>
</div>

<table cellspacing="0" border="0" style="width:100%;border-collapse:collapse;">
    <tr>
        <td align="center">
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


