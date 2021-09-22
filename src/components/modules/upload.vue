<style lang="less">
      @import url('module.less');
</style>
<template>
      <div class="components">
          <el-scrollbar  style="height: 100%">
              <div class="card">
                  <el-divider>列表式上传文件()</el-divider>  
                  <div class="el-tr">
                        <el-upload class="upload-demo" action="/posts"
                        :on-preview = "handlePreview"
                        :on-remove = "handleRemove"
                        :before-remove = "beforeRemove"
                        multiple
                        :limit="5"
                        :on-exceed="handleExceed"
                        :file-list="fileList">
                              <el-button size="small" type="primary">点击上传</el-button>
                              <div class="el-upload_tip" slot="tip">只能上传jpg/png文件，数量不能超过5个</div>
                        </el-upload>
                  </div>

                  <el-divider>照片墙式上传文件()</el-divider>  
                  <div class="el-tr">
                        <el-upload class="upload-demo" action="/posts"
                        :on-preview = "handlePreview"
                        :on-remove = "handleRemove"
                        list-type="picture-card"
                        :before-remove = "beforeRemove">
                              <i class="el-icon-plus"></i>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible">
                              <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                  </div>

                  <el-divider>文件缩略图形式上传文件()</el-divider>  
                  <div class="el-tr">
                        <el-upload class="upload-demo" action="#"
                        list-type="picture-card"
                        :auto-upload = false>
                              <i slot="default" class="el-icon-plus"></i>
                              <div solt="file" slot-scope="{file}">
                                    <img :src="file.url" class="el-upload-list__item-thumbnail" alt="">
                                    <span class="el-upload-list__item-action">
                                          <span 
                                          class="el-upload-list__item-preivew" 
                                          @click="handlePictureCardPreview(file)">
                                                <i class="el-icon-zoom-in"></i>
                                          </span>
                                          <span
                                          v-if="!disabled"
                                          class="el-upload-list__item-delete"
                                          @click="handleDownload(file)">
                                                <i class="el-icon-download"></i>
                                          </span>
                                          <span
                                          v-if="!disabled"
                                          class="el-upload-list__item-delete"
                                          @click="handleRemove(file)"
                                          >
                                                <i class="el-icon-delete"></i>
                                          </span>
                                    </span>
                              </div>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible">
                              <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                  </div>

                  <el-divider>手动上传文件</el-divider>
                  <div class="el-tr">
                        <el-upload
                        class="upload-demo"
                        ref="upload"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :file-list="fileList"
                        :auto-upload="false">
                        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload>
                  </div>
              </div>
          </el-scrollbar>
       </div>
</template>

<script>
      export default {
            data(){
                  return{
                        dialogImageUrl:'',
                        dialogVisible:false,
                        disable:false,
                        fileList:[
                              {name:'kenan.jpeg',url:'https://c-ssl.duitang.com/uploads/item/201708/10/20170810110025_EryHM.jpeg'},
                              {name:'kenan2.jpeg',url:'https://c-ssl.duitang.com/uploads/item/201708/10/20170810110005_J4hUK.thumb.700_0.jpeg'}
                              ]
                  }
            },
            methods:{
                  submitUpload() {
                        this.$refs.upload.submit();
                  },
                  handleRemove(file, fileList) {
                        console.log(file, fileList);
                  },
                  handlePreview(file) {
                        console.log(file);
                  },
                  handleExceed(files, fileList) {
                        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
                  },
                  beforeRemove(file, fileList) {
                        return this.$confirm(`确定移除 ${ file.name }？`);
                  },
                  handlePictureCardPreview(file) {
                        this.dialogImageUrl = file.url;
                        this.dialogVisible = true;
                  },
                  handleDownload(file) {
                        console.log(file);
                  }
            }
      }
</script>
