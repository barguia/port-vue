import appApi from "@/plugins/axios"
import Crud from '@/plugins/axiosCrudActions'

const c = new Crud(appApi, '/wf/ctl-process')

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