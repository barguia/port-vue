import appApi from "@/plugins/axios"
import CrudAxios from '@/plugins/axiosCrudActions'

const c = new CrudAxios(appApi, '/wf/ctl-tasks')

const create = c.createNewItem()
const getItem = c.getItemById()
const update = c.updateItem()
const index = c.getIndex()
const _delete = c._delete()

export {
    create,
    getItem,
    update,
    index,
    _delete
}
