/**
 * Import dos componentes globais
 */
import AppButton from "@/components/commun/AppButton.vue";
import AppCol from "@/components/grids/AppCol.vue";
import AppRow from "@/components/grids/AppRow.vue";
import AppInput from "@/components/forms/AppInput.vue";
import AppIcon from "@/components/commun/AppIcon.vue";
import AppContainer from "@/components/commun/AppContainer.vue";
import AppAlert from "@/components/commun/AppAlert.vue";
import AppList from "@/components/commun/AppList.vue";
import AppListItem from "@/components/commun/AppListItem.vue";
import AppCard from "@/components/commun/AppCard.vue";
import AppBreadcrumbs from "@/components/commun/AppBreadcrumbs.vue";
import AppForm from "@/components/forms/AppForm.vue";
import AppBadge from "@/components/commun/AppBadge.vue";

export default {
    install: (app, options) => {
        /* declare global component */
        app.component('AppButton', AppButton)
        app.component('AppCol', AppCol)
        app.component('AppRow', AppRow)
        app.component('AppInput', AppInput)
        app.component('AppIcon', AppIcon)
        app.component('AppContainer', AppContainer)
        app.component('AppAlert', AppAlert)
        app.component('AppList', AppList)
        app.component('AppListItem', AppListItem)
        app.component('AppCard', AppCard)
        app.component('AppBreadcrumbs', AppBreadcrumbs)
        app.component('AppForm', AppForm)
        app.component('AppBadge', AppBadge)
    },
};