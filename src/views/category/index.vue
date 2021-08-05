<template>
    <div class="app-container">
        <el-table
            :data="list"
            border
            highlight-current-row
            style="width: 100%">
            <el-table-column align="center" type="index" label="序号" width="60"></el-table-column>
            <el-table-column align="center" prop="name" label="分类名称" ></el-table-column>
            <el-table-column align="center" prop="sort" label="排序" ></el-table-column>
            <el-table-column align="center" prop="remark" label="备注" ></el-table-column>
            <el-table-column align="center" prop="status" label="状态" width="160">
                <template slot-scope="scope">
                    <el-tag :type="scope.row.status | statusFilter">
                        {{ scope.row.status ? '正常':'禁用' }}
                    </el-tag>
                </template>
            </el-table-column>
            <el-table-column align="center" label="操作" >
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.row.id)">编辑</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 分頁 -->
        <div class="pagination-wrapper">
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="page.current"
                :page-sizes="[10, 20, 50]"
                :page-size="page.size"
                :total="page.total"
                layout="total, sizes, prev, pager, next, jumper"
            >
            </el-pagination> 
        </div>
    </div>  
</template>
<script>
import api from '@/api/category'
export default {
    name:"Category",
    data() {
        return {
            list: [],
            page: { 
                total: 0, 
                current: 1, 
                size: 10,
            },
            query: {} 
        }
    },
    filters: {
        statusFilter(status) {
            // statusMap樣式 => 0:禁用 1:正常
            const statusMap = {0: 'danger', 1: 'success'}
            return statusMap[status]
        }
    },
    methods: {
        async fetchData () {
            const result = await api.getList(this.query, this.page.current, this.page.size);
            console.log("result",result)
            if(result.code === 20000){
                this.list = result.data.records
                this.page.total = result.data.total
            }
        },
        handleEdit(id) {
            console.log('编辑', id)
        },
        handleDelete(id) {
            console.log('删除', id)
        },
        handleSizeChange(val) {
            this.page.size = val;
            this.fetchData()
        },
        handleCurrentChange(val) {
            this.page.current = val;
            this.fetchData();
        },
    },  
    mounted(){
        this.fetchData()
    }
}    
</script>
<style lang="scss" scoped>
.pagination-wrapper{
    margin-top: 20px;
}
</style>
