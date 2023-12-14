import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routeLink: 'dashboard',
        icon: 'fal fa-home',
        label: 'Dashboard'
    },
    {
        routeLink: 'statistics',
        icon: 'fal fa-chart-bar',
        label: 'Statistics'
    },
    {
        routeLink: 'coupons',
        icon: 'fal fa-tags',
        label: 'Coupons',
        items: [
            {
                routeLink: 'coupons/list',
                label: 'List Coupons'
            },
            {
                routeLink: 'coupons/create',
                label: 'Create Coupons'
            }
        ]
    },
    {
        routeLink: 'settings',
        icon: 'fal fa-cog',
        label: 'Settings',
        // expanded: true,
        // items: [
        //     {
        //         routeLink: 'settings/profile',
        //         label: 'Profile'
        //     },
        //     {
        //         routeLink: 'settings/customize',
        //         label: 'Customize'
        //     }
        // ]
    },
    {
      routeLink: 'airport',
      icon: 'fal fa-plane-arrival',
      label: 'Airport',
      items: [
        {
            routeLink: 'airport/list',
            label: 'List Airports'
        },
        {
            routeLink: 'airport/create',
            label: 'Add Airports'
        }
    ]
  },
  {
    routeLink: 'flight',
    icon: 'fal fa-plane',
    label: 'Flight',
    items: [
      {
          routeLink: 'flight/list',
          label: 'List Flights'
      },
      {
          routeLink: 'flight/create',
          label: 'Add Flights'
      }
  ]
},
{
  routeLink: 'schedule',
  icon: 'fal fa-calendar-day',
  label: 'Schedule',
  items: [
    {
        routeLink: 'schedule/list',
        label: 'List Schedules'
    },
    {
        routeLink: 'schedule/create',
        label: 'Create Schedules'
    }
]
}
];
