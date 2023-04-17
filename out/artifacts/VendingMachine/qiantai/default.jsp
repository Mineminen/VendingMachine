<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<%
String path = request.getContextPath();
String basePath = request.getScheme() + "://"+ request.getServerName() + ":" + request.getServerPort()+ path + "/";
%>

<jsp:include flush="true" page="/qiantai/head.jsp"></jsp:include>


    <main>
     <section class="slider-area">
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner">
                  <div class="carousel-item active">
                      <img src="<%=path%>/img/b1.jpg" class="d-block w-100" alt="...">
                  
                  </div>
                  <div class="carousel-item">
                      <img src="<%=path%>/img/b2.jpg" class="d-block w-100" alt="...">
                    
                  </div>
                  <div class="carousel-item">
                      <img src="<%=path%>/img/b3.jpg" class="d-block w-100" alt="...">
                  </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
              </button>
              </div>
     </section>
    
    <div class="container pt-10 pb-10 " style="color:red; ">
        <div class="row">
           <div class="col-lg-12">
             
                <div class="text-left">
                     <marquee behavior="scroll" direction="left" scrollamount="4" scrolldelay="100" onmouseover="this.stop()" onmouseout="this.start()">
                      
                            <i class="fa fa-volume-up"></i>
                      <c:forEach items="${newsList}" var="news" varStatus="status" >
 
                           <span><a  href="<%=path%>/newsView.action?id=${news.id}">${news.title}</a></span>
                        </c:forEach>
                     </marquee>
                    </div>               
               
           </div>
        </div>
    </div>
<section class="season-area pt-30 pb-30">
                     <div class="bz-season">
                         <div class="container">
                             <div class="row justify-content-center">
                                 <div class="col-xl-8 col-lg-8">
                                     <div class="bz-section-title text-center mb-60">
                                         <h3>最新商品</h3>
                                         <p>显示最新发布的8个商品</p>
                                     </div>
                                 </div>
                             </div>
                             <div class="row">
  <c:forEach items="${goodsList}" var="goods" varStatus="status" >
   
                                 <div class="col-xl-3 col-lg-3 col-md-6">
                                     <div class="bz-season-item mb-40" bis_skin_checked="1">
                                         <div class="bz-season-item-wrapper position-relative">
                                             <div class="bz-season-item-img w_img" bis_skin_checked="1"><a href="<%=path%>/goodsView.action?id=${goods.gid}" class=""><img src="<%=path%>/${goods.photo}" style="width:270px;height: 270px "></a><span class="trend" style="background-color: green">最新</span></div>
                                             <div class="bz-season-item-hover-wrapper">
                                                 
                                                 <div class="bz-season-item-hover">
                                                     <div class="bz-season-item-hover-cart"><a   href="javascript:void(0)"  onclick="addCart(${goods.gid},${goods.price})">加入购物车</a></div>


                                                 </div>
                                             </div>
                                         </div>
                                         <div class="bz-season-item-content pt-20">
                                             <h4 class="bz-season-item-content-title"><a href="<%=path%>/goodsView.action?id=${goods.gid}">${goods.gtitle}</a></h4>
                                             <span class="price-bottom" style="width: 100%;color: red">￥${goods.price}</span>
                                         </div>
                                     </div>
                                 </div>
                </c:forEach>                  
              </div>
                         </div>
                     </div>
                 </section>
<section class="season-area pt-30 pb-30">
                     <div class="bz-season">
                         <div class="container">
                             <div class="row justify-content-center">
                                 <div class="col-xl-8 col-lg-8">
                                     <div class="bz-section-title text-center mb-60">
                                         <h3>热门商品</h3>
                                         <p>显示销量最高的8个商品</p>
                                     </div>
                                 </div>
                             </div>
                             <div class="row">
  <c:forEach items="${goodsList3}" var="goods" varStatus="status" >
   
                                 <div class="col-xl-3 col-lg-3 col-md-6">
                                     <div class="bz-season-item mb-40" bis_skin_checked="1">
                                         <div class="bz-season-item-wrapper position-relative">
                                             <div class="bz-season-item-img w_img" bis_skin_checked="1"><a href="<%=path%>/goodsView.action?id=${goods.gid}" class=""><img src="<%=path%>/${goods.photo}" style="width:270px;height: 270px "></a><span class="trend bg-red" style="background-color: red">热门</span></div>
                                             <div class="bz-season-item-hover-wrapper">
                                                 
                                                 <div class="bz-season-item-hover">
                                                     <div class="bz-season-item-hover-cart"><a   href="javascript:void(0)"  onclick="addCart(${goods.gid},${goods.price})">加入购物车</a></div>
                                                  
                                                 </div>
                                             </div>
                                         </div>
                                         <div class="bz-season-item-content pt-20">
                                             <h4 class="bz-season-item-content-title"><a href="<%=path%>/goodsView.action?id=${goods.gid}">${goods.gtitle}</a></h4>
                                             <span class="price-bottom" style="width: 100%;color: red">￥${goods.price}</span>
                                         </div>
                                     </div>
                                 </div>
                </c:forEach>                  
              </div>
                         </div>
                     </div>
                 </section>

    
         
     </main>
<script type="text/javascript">

    //加入购物车
    function addCart(pid,price) {
        $.ajax({
            url: "<%=path %>/shoppingcarAdd.action",
            type: "post",
            data: {
                "gid": pid,
                "quantity": 1,
                "price": price
            },
            dataType: "json",
            success: function (data) {
                if (data == 0) {
                    layer.msg("请先登录");
                }
                else
                {
                    $("#totalquan").html(data);
                    layer.msg("加入成功");
                }

            }
        });
    }
</script>



<jsp:include flush="true" page="/qiantai/foot.jsp"></jsp:include>

