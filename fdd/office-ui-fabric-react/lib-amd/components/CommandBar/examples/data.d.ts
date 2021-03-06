export declare const items: ({
    key: string;
    name: string;
    cacheKey: string;
    iconProps: {
        iconName: string;
    };
    ariaLabel: string;
    ['data-automation-id']: string;
    subMenuProps: {
        items: ({
            key: string;
            name: string;
            iconProps: {
                iconName: string;
            };
            ['data-automation-id']: string;
        } | {
            key: string;
            name: string;
            iconProps: {
                iconName: string;
            };
            "data-automation-id"?: undefined;
        })[];
    };
    href?: undefined;
    target?: undefined;
    onClick?: undefined;
} | {
    key: string;
    name: string;
    iconProps: {
        iconName: string;
    };
    href: string;
    'data-automation-id': string;
    target: string;
    cacheKey?: undefined;
    ariaLabel?: undefined;
    subMenuProps?: undefined;
    onClick?: undefined;
} | {
    key: string;
    name: string;
    iconProps: {
        iconName: string;
    };
    onClick: () => void;
    cacheKey?: undefined;
    ariaLabel?: undefined;
    "data-automation-id"?: undefined;
    subMenuProps?: undefined;
    href?: undefined;
    target?: undefined;
})[];
export declare const overflowItems: {
    key: string;
    name: string;
    iconProps: {
        iconName: string;
    };
}[];
export declare const farItems: ({
    key: string;
    name: string;
    ariaLabel: string;
    iconProps: {
        iconName: string;
    };
    onClick: () => void;
    iconOnly?: undefined;
} | {
    key: string;
    name: string;
    ariaLabel: string;
    iconProps: {
        iconName: string;
    };
    iconOnly: boolean;
    onClick: () => void;
})[];
