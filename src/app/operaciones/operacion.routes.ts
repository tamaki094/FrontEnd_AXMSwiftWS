import { Routes} from "@angular/router";


export default [
    {
        path: "sendMessageDeliverySwift",
        loadComponent: () => import('./features/transf-internacional/transf-internacional.component')
    },
    {
        path: "getStatusMessageSwift",
        loadComponent: () => import('./features/operacion/operacion.component')
    },
    {
        path: "getOperaciones",
        loadComponent: () => import('./features/consulta-operaciones/consulta-operaciones.component')
    }
] as Routes


