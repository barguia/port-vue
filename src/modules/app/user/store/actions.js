import appApi from "@/plugins/axios"
import CrudAxios from '@/plugins/axiosCrudActions'

const c = new CrudAxios(appApi, '/users')

const create = c.createNewItem()
const update = c.updateItem()
const index = c.getIndex()
const _delete = c._delete()


export {
    index,
    create,
    update,
    _delete,
}