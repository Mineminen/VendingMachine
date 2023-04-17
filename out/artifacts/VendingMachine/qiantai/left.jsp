<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<%
String path = request.getContextPath();
String basePath = request.getScheme() + "://"+ request.getServerName() + ":" + request.getServerPort()+ path + "/";
%>


<div class="col-xl-4 col-lg-4 mb-40 mb-lg-0">
    <div class="bz-shop-sidebar bz-shop-border pb-40 pt-40 pl-40 pr-40">
        <div class="bz-shop-sidebar-categories mb-30">
	<h3 class="bz-shop-sidebar-categories-title">
		商品分类
	</h3>
	<div class="bz-shop-sidebar-categories-list">
		<ul>
		   <c:forEach items="${goodstypeList2}" var="goodstype" varStatus="status" >
 
	               <li><a href="<%=path%>/goods_List.action?tyid=${goodstype.tyId}" >${goodstype.tyname}</a></li>
			  </c:forEach>
		</ul>
	</div>
</div>
<div class="bz-shop-sidebar-color mb-30">
	<h3 class="bz-shop-sidebar-color-title">
		最新商品
	</h3>
	<div class="bz-shop-sidebar-color-list">
		<div id="colee" style="overflow:hidden;height:425px;width:230px;">
			<div id="colee1">
				<table width="202" border="0" align="center" cellpadding="0" cellspacing="0">
					<tbody>
  				<c:forEach items="${goodsList2}" var="goods" varStatus="status" >
  
						<tr>
							<td valign="top" align="center">
								<table width="100%" border="0" cellspacing="0" cellpadding="0">
									<tbody>
										<tr>
											<td valign="top">
												<div style="width:202px; height:157px; overflow:hidden">
													<table width="100%" border="0" cellspacing="0" cellpadding="0">
														<tbody>
															<tr>
																<td align="center" width="202" height="153" class="index_product_k2">
																	<a href="<%=path%>/goodsView.action?id=${goods.gid}">
																		<img src="<%=path%>/${goods.photo}" border="0" align="absmiddle" height="151" width="151">
																	</a>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</td>
										</tr>
										<tr>
											<td height="20" colspan="2" align="center">
												<a href="<%=path%>/goodsView.action?id=${goods.gid}" class="linkuse">
													${goods.gtitle}
												</a>
											</td>
										</tr>
										<tr>
											<td height="20" colspan="2" align="center">
												<b style='color:red'>${goods.price}</b>元
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
   					  </c:forEach>
					</tbody>
				</table>
			</div>
			<div id="colee2">
			</div>
		</div>
		<script>
			var speed = 30;
var colee2 = document.getElementById("colee2");
var colee1 = document.getElementById("colee1");
var colee = document.getElementById("colee");
colee2.innerHTML = colee1.innerHTML; //克隆colee1为colee2
function Marquee1() {
    //当滚动至colee1与colee2交界时
    if (colee2.offsetTop - colee.scrollTop <= 0) {
        colee.scrollTop -= colee1.offsetHeight; //colee跳到最顶端
    } else {
        colee.scrollTop++
    }
}

var MyMar1 = setInterval(Marquee1, speed) //设置定时器
    //鼠标移上时清除定时器达到滚动停止的目的
colee.onmouseover = function() {
        clearInterval(MyMar1)
    }
    //鼠标移开时重设定时器
colee.onmouseout = function() {
    MyMar1 = setInterval(Marquee1, speed)
}
		</script>
		<!--向上滚动代码结束-->
	</div>
</div>

    </div>
</div>


