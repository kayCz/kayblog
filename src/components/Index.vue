<template>
	<div>
         <ImgPic style="float:left;width:25%;position:fixed;top:-5;left:70;"></ImgPic>
         <div class="msg" style="float:left;margin-top:30px;margin-left:25%;position:absolute;">
            <div>
             <router-link to="/foo"> <a  class="demo" >最新</a></router-link>
             <router-link to="/foo"> <a  class="demo" >热门</a></router-link>
             <router-link to="/foo"> <a  class="demo" >vuejs</a></router-link>
             <router-link to="/foo"> <a  class="demo" >nodejs</a></router-link>
             <router-link to="/foo"> <a  class="demo" >docker</a></router-link>
             <router-link to="/foo"> <a  class="demo" >java</a></router-link>
             <router-link to="/foo"> <a  class="demo" >linux</a></router-link>
             <router-link to="/foo"> <a  class="demo" >其他</a></router-link>
            </div>
            <div style="margin-top:60px;">
              <router-link to="/foo"> <a  class="demo" >心情</a></router-link>
            </div>

            <div style="margin-top:60px;margin-left:30px;">
                <div style="border-bottom-width:1px;border-bottom-style:dashed;">
                    <p class="list-top">
                    <span class="time">16小时前</span>
                    </p>
                    <h4 class="title">
                    <a class="link-title" href="/article/57fb7c84cf97d30019b941d0">
                    docker + rancher + jenkins 实现集成测试和自动部署(CI/CD)
                    </a>
                    </h4>
                    <div>
                         <span>阅读 18</span>
                         <span> · 评论 0</span>
                         <span> · 喜欢 2</span>
                    </div>
                 </div>
            </div>

            <div style="margin-top:60px;margin-left:30px;">
                            <div style="border-bottom-width:1px;border-bottom-style:dashed;">
                                <p class="list-top">
                                <span class="time">16小时前</span>
                                </p>
                                <h4 class="title">
                                <a class="link-title" href="/article/57fb7c84cf97d30019b941d0">
                                docker + rancher + jenkins 实现集成测试和自动部署(CI/CD)
                                </a>
                                </h4>
                                <div>
                                     <span>阅读 18</span>
                                     <span> · 评论 0</span>
                                     <span> · 喜欢 2</span>
                                </div>
                             </div>
                        </div>

                        <div style="margin-top:60px;margin-left:30px;">
                                        <div style="border-bottom-width:1px;border-bottom-style:dashed;">
                                            <p class="list-top">
                                            <span class="time">16小时前</span>
                                            </p>
                                            <h4 class="title">
                                            <a class="link-title" href="/article/57fb7c84cf97d30019b941d0">
                                            docker + rancher + jenkins 实现集成测试和自动部署(CI/CD)
                                            </a>
                                            </h4>
                                            <div>
                                                 <span>阅读 18</span>
                                                 <span> · 评论 0</span>
                                                 <span> · 喜欢 2</span>
                                            </div>
                                         </div>
                                    </div>

                                    <div style="margin-top:60px;margin-left:30px;">
                                                    <div style="border-bottom-width:1px;border-bottom-style:dashed;">
                                                        <p class="list-top">
                                                        <span class="time">16小时前</span>
                                                        </p>
                                                        <h4 class="title">
                                                        <a class="link-title" href="/article/57fb7c84cf97d30019b941d0">
                                                        docker + rancher + jenkins 实现集成测试和自动部署(CI/CD)
                                                        </a>
                                                        </h4>
                                                        <div>
                                                             <span>阅读 18</span>
                                                             <span> · 评论 0</span>
                                                             <span> · 喜欢 2</span>
                                                        </div>
                                                     </div>
                                                </div>

                                                <div style="margin-top:60px;margin-left:30px;">
                                                                <div style="border-bottom-width:1px;border-bottom-style:dashed;">
                                                                    <p class="list-top">
                                                                    <span class="time">16小时前</span>
                                                                    </p>
                                                                    <h4 class="title">
                                                                    <a class="link-title" href="/article/57fb7c84cf97d30019b941d0">
                                                                    docker + rancher + jenkins 实现集成测试和自动部署(CI/CD)
                                                                    </a>
                                                                    </h4>
                                                                    <div>
                                                                         <span>阅读 18</span>
                                                                         <span> · 评论 0</span>
                                                                         <span> · 喜欢 2</span>
                                                                    </div>
                                                                 </div>
                                                            </div>

         </div>
	</div>
</template>


<script>
    import ImgPic from "./Img.vue"

    export default {
        components:{
            "ImgPic":ImgPic
        }
    }
</script>

<style>
    .demo {
        margin-left:25px;
        padding: 10px 25px;
        border-width: 1px;
        border-style: solid;
        border-color:#d9d9d9;
        border-radius: 14px;
        box-sizing: border-box;
        font-size: 12px;
        line-height: 1.5em;
        background-color:transparent;
    }

    a:hover{
        text-decoration: none;
    }

</style>



