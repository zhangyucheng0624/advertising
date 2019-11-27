<template>
  <div class="material-wrap">
    <div class="material-table" v-if="isShowTab">
      <header class="material-header">
        <a-button type="primary" icon="plus" @click="() => visible = true">添加</a-button>
        <a-popconfirm
          title="确定要删除素材吗？"
          @confirm="confirm"
          okText="确认"
          cancelText="取消"
        >
          <a-button type="primary" icon="delete" style="margin-left: 10px">删除</a-button>
        </a-popconfirm>
        <a-button type="primary" icon="reload" style="margin-left: 10px" @click="updateTab">刷新</a-button>
        <div>
          <a-modal title="添加素材" :visible="visible" @ok="handleOk" :confirmLoading="confirmLoading"
            @cancel="() => visible = false" cancelText="取消" okText="添加" >
            <a-form :form="form">
              <a-form-item label="文件类型" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                <a-select style="width: 120px" v-decorator="['文件类型',{rules:[{ required: true,}]}]">
                  <a-select-option value="图片视频">图片视频</a-select-option>
                  <a-select-option value="交通信息">交通信息</a-select-option>
                  <a-select-option value="天气信息">天气信息</a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item label="文件名" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                <a-input v-decorator="['fileName',{rules:[{ required: true,}]}]" @input="e => fileName = e.target.value"/>
              </a-form-item>
              <a-form-item label="作者" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                <a-input v-decorator="['author',{rules:[{ required: true,}]}]" @input="e => author = e.target.value"/>
              </a-form-item>
              <a-form-item label="单位名称" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                <a-input v-decorator="['organName',{rules:[{ required: true,}]}]" @input="e => organName = e.target.value" />
              </a-form-item>
              <a-form-item label="选择文件" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                <a-upload
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture"
                  @preview="handlePreview"
                  class="upload-list-inline"
                  @change="handleUpload">
                  <a-button> <a-icon type="upload" /> 上传文件 </a-button>
                </a-upload>
              </a-form-item>
            </a-form>
          </a-modal>
        </div>
      </header>
      <div class="material-main">
        <div style="position: relative;margin-bottom: 20px">
          <span style="margin-left: 8px;font-size: 16px;">
            <template>
               <a-alert :message="`已选择 ${selectedRowKeys.length} 项`" type="info" showIcon />
              <a-button type="primary" @click="deletes" :loading="loading" style="position: absolute;top: 27px;left: 130px;">
                清空
              </a-button>
            </template>
          </span>
        </div>
        <a-table
          :rowSelection="{selectedRowKeys: selectedRowKeys, onSelect:onSelectChanges, onChange: onSelectChange, onSelectAll: onSelectAllChange}"
          :columns="columns"
          :dataSource="adMats" :loading="loadings">
          <img alt="" slot="thumbnail" slot-scope="text,data" :src="data.thumbnail" style="width: 30px;">
          <a-tag slot="status" slot-scope="text,data" :color="tagColor(data.matAuditStatus)">{{data.status}}</a-tag>
          <template slot="operation" slot-scope="text,data">
            <a href="javascript:;" slot="operation" @click="compileMaterial(data)">{{data.matAuditStatus !==1 ? '编辑': ''}}</a>
            <a href="javascript:;" slot="operation" @click="audit(data)" style="margin: 0 10px 0 10px;">审核</a>
            <a href="javascript:;" slot="operation" @click="deleter(data)">设置规则</a>
          </template>
        </a-table>
      </div>
    </div>
    <div class="material-detail" v-else>
      <div style="float: right">
        <a-button type="primary" style="margin-right: 10px;" v-if="isShowBtn" @click="passAudit">通过</a-button>
        <a-button type="danger" style="margin-right: 10px;" v-if="isShowBtn" @click="rejectMaterial">驳回</a-button>
        <a-button type="primary" @click="backTable">返回</a-button>
      </div>
      <header class="material-detail-header">
        <h2>素材详情</h2>
        <ul class="material-detail-list">
          <li>
            <span>创建人：{{lineData.author}}</span>
          </li>
          <li>
            <span>素材名：{{lineData.fileName}}</span>
          </li>
          <li>
            <span>创建时间：{{lineData.createTime}}</span>
          </li>
          <li>
            <span>单位：{{lineData.organName}}</span>
          </li>
        </ul>
        <div class="material-detail-status">
          <span>
            状态：{{status}}
          </span>
        </div>
      </header>
      <div class="material-detail-preview">
        <header class="material-detail-preview-header">
          <h2>素材预览</h2>
        </header>
        <div class="material-detail-preview-content">
          <img :src="lineData.matUrl" alt="">
          <ul class="material-detail-preview-content-list">
            <li>
              <span>素材ID：{{lineData.matId}}</span>
            </li>
            <li>
              <span>素材名：{{lineData.fileName}}</span>
            </li>
            <li>
              <span>创建时间：{{lineData.createTime}}</span>
            </li>
            <li>
              <span>作者：{{lineData.author}}</span>
            </li>
            <li>
              <span>单位：{{lineData.organName}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const columns = [
    {
      title: '素材ID',
      dataIndex: 'matId',
      sorter: (a, b) => a.matId - b.matId,
    },
    {
      title: '文件名',
      dataIndex: 'fileName',
    },
    {
      title: '缩略图',
      dataIndex: 'thumbnail',
      scopedSlots: { customRender: 'thumbnail' }
    },
    {
      title: '审核状态',
      dataIndex: 'status',
      filters: [{ text: '已审核', value: '已审核' }, { text: '待审核', value: '待审核' }, { text: '已驳回', value: '已驳回' }],
      onFilter: (value, record) => record.status.indexOf(value) === 0,
      sortDirections: ['descend'],
      scopedSlots: { customRender: 'status' }
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
    },
    {
      title: '作者',
      dataIndex: 'author',
      sorter: true
    },
    {
      title: '单位',
      dataIndex: 'organName',
      sorter: true
    },
    {
      title: '操作',
      dataIndex: 'operation',
      scopedSlots: { customRender: 'operation' },
    },
  ];
  import {reqAdMats} from '../../api'
  export default {
    name: "material",
    inject:['reload'],
    data () {
      return {
        columns,
        selectedRowKeys:[],
        adMats:[],
        loading:false,
        loadings:false,
        isShowTab: true,
        lineData: {},
        status: '',
        visible: false,
        confirmLoading: false,
        form: this.$form.createForm(this),
        matId:'',
        isCompile: false,
        imgUrl: '',
        fileName: '',
        author: '',
        organName: '',
        isShowBtn: false,
        isPass: 1,
        message: '审核通过成功',
        originFileObj :'',
        tagColor: name => {
          if(name === 0){
            return '#faad14'
          }else if(name === 1){
            return '#87d068'
          }else if (name === 2) {
            return '#f50'
          }
        }
      }
    },
    created () {
      this.adMat();
    },
    methods: {
      onSelectChange(selectedRowKeys) {
        this.selectedRowKeys = selectedRowKeys;
      },
      onSelectChanges (record, selected, selectedRows) {
        if (!selected) {
          this.matId = ''
        }else {
          selectedRows.map((item) => {
            this.matId += item.matId + ','
          });
        }
      },
      onSelectAllChange (selected,selectedRows) {
        if (!selected) {
          this.matId = ''
        }else {
          selectedRows.map((item) => {
            this.matId += item.matId + ','
          });
        }
      },
      async adMat () {
        this.loadings = true;
        const result = await reqAdMats();
        if (result) {
          this.adMats = result.adMats;
          for (let i = 0; i<this.adMats.length; i++) {
            this.adMats[i].key = i;
            if (this.adMats[i].matAuditStatus === 0) {
              this.adMats[i].status = '待审核'
            } else if (this.adMats[i].matAuditStatus === 1) {
              this.adMats[i].status = '已审核'
            } else if (this.adMats[i].matAuditStatus === 2) {
              this.adMats[i].status = '已驳回'
            }
          }
          this.loadings = false;
        }
      },
      deletes () {
        if (this.selectedRowKeys.length !== 0) {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.selectedRowKeys = []
          },1000);
        }
      },
      audit (data) {
        this.lineData = data;
        if (this.lineData.matAuditStatus === 0) {
          this.isShowBtn = true;
          this.isShowTab = false;
          this.status = this.lineData.status;
        }else {
          this.isShowTab = false;
          this.status = this.lineData.status;
          console.log(this.lineData);
        }
      },
      updateTab () {
        this.loadings = true;
        setTimeout(() => {
          this.loadings = false;
          this.adMat()
        },1000)
      },
      handleOk() {
        this.confirmLoading = true;
        setTimeout(() => {
          this.$axios.post(`${this.$equipment}/uploadAdMat?token=${JSON.parse(localStorage.token)}&fileName=${this.fileName}&author=${this.author}
          &organName=${this.organName}`,qs.stringify({
            222: this.imgUrl
          }))
            .then(res => {
              const result = res.data;
              console.log(result);
              this.visible = false;
              this.confirmLoading = false;
            }).catch(res => {
          })
        }, 1000);
      },
      confirm() {
        if (this.matId !== '') {
          this.$axios.post(`${this.$equipment}/delAdMats?token=${JSON.parse(localStorage.token)}&matIds=${this.matId}`)
            .then(res => {
              const result = res.data;
              if (result.delAdMats) {
                this.matId = '';
                this.$message.success('删除素材成功',1);
                this.reload()
              }
            })
        }else {
          this.$message.info('请选择要删除的素材')
        }
      },
      handleUpload (info) {
        this.imgUrl = info.file.thumbUrl;
        this.originFileObj = info.file.originFileObj;
        console.log(info.file);
      },
      handlePreview (file) {
        console.log(file.url);
      },
      passAudit () {
        this.$axios.post(`${this.$equipment}/auditAdMat?token=${JSON.parse(localStorage.token)}&matId=${this.lineData.matId}&matAuditStatus=${this.isPass}`)
          .then(res => {
            const result = res.data;
            if (result.auditAdMat) {
              this.$message.success(this.message, 1);
              this.isShowTab = true;
              this.reload()
            }
            console.log(result);
          })
      },
      rejectMaterial () {
        this.isPass = 2;
        this.message = '驳回成功';
        this.passAudit();
        this.reload()
      },
      compileMaterial (data) {
        console.log(data);
      },
      backTable () {
        this.isShowTab = !this.isShowTab;
        this.isShowBtn = false;
      }
    }
  }
</script>

<style scoped lang="stylus">
  .material-wrap
    width 100%
    background-color #fff
    padding 20px
    .material-detail
      width 100%
      height 100%
      .material-detail-header
        width 100%
        height 200px
        h2
          font-weight bold
        .material-detail-list
          list-style none
          width 50%
          flex-wrap wrap
          display inline-block
          li
            width 50%
            display inline-block
            margin-bottom 20px
            font-size 18px
        .material-detail-status
          float right
          margin-right 20%
          font-size 18px
      .material-detail-preview
        width 100%
        padding 24px
        .material-detail-preview-header
          width 100%
          height 60px
          h2
            height 60px
            font-weight bold
            border-bottom 1px solid
        .material-detail-preview-content
          width 100%
          padding 20px
          position relative
          img
            width 50%
          .material-detail-preview-content-list
            list-style none
            position absolute
            left 60%
            top 20%
            li
              font-size 18px
              margin-bottom 10px
  .upload-list-inline >>> .ant-upload-list-item {
    float: left;
    width: 200px;
    margin-right: 8px;
  }
  .upload-list-inline >>> .ant-upload-animate-enter {
    animation-name: uploadAnimateInlineIn;
  }
  .upload-list-inline >>> .ant-upload-animate-leave {
    animation-name: uploadAnimateInlineOut;
  }
</style>
