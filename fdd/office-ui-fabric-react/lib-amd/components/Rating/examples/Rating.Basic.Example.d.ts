/// <reference types="react" />
import * as React from 'react';
import './Rating.Basic.Example.scss';
export declare class RatingBasicExample extends React.Component<{}, {
    rating?: number;
    largeStarRating?: number;
    smallStarRating?: number;
    tenStarRating?: number;
    themedStarRating?: number;
}> {
    private _customTheme;
    constructor(props: {});
    render(): JSX.Element;
    private _onFocus;
    private _onBlur;
    private _onLargeStarChange;
    private _onSmallStarChange;
    private _onTenStarChange;
    private _onThemedStarChange;
    private _getRatingComponentAriaLabel(rating, maxRating);
}
