export interface ILaunches {
    id: String
    mission_name: String
    launch_date_local: String
    details?: String
    launch_site: LaunchSite
    rocket: Rocket
}

interface LaunchSite {
    site_name: String
}

interface Rocket {
    rocket: {
        id: String
        name: String
    }
}