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
									公告列表
    							</h3>
    						</div>
    						<div class="bz-breadcrumb-list">
    							<a href="<%=path%>/index.action">
    								网站首页
    							</a>
    							<span>
    								公告列表
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
    											
	                                         
	                                          <style type="text/css">
    .tablelist{
        width: 100%;
        font-size: 13px;
        height: 33px;
    }

    .tablelist a
    {
        font-size: 15px;
        text-decoration: none;
    }

    .tablelist :hover
    {
        background-color: #f5f5f5;
    }
</style>
<pg:pager  url="news_List.action" items="${itemSize}" maxPageItems="${pageItem}"
        maxIndexPages="${pageItem}" isOffset="${true}" export = "offset,currentPageNumber=pageNumber"  scope ="request" >
    <c:forEach items="${newsList}" var="news" varStatus="status" >
        
<table style="width:100%;border-bottom: 1px dashed #000;" class="tablelist">
    <tbody>
        <tr>
            <td> <a href="<%=path%>/newsView.action?id=${news.id}">${news.title}</a></td>
            <td width="30%" align="right">发布时间：${news.naddtime}</td>
        </tr>
    </tbody>
</table>

    </c:forEach>  
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


