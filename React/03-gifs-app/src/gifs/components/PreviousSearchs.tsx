import type { FC } from "react";

interface Props {
    previousSearchs: string[];
    onlabelClicked: (term: string) => void;
}

export const PreviousSearchs: FC<Props> = ({ previousSearchs, onlabelClicked }) => {
    return (
        <div className="previous-searches">
            <h2>Busquedas previas</h2>
            <ul className="previous-searches-list">
                {
                    previousSearchs.map(term => (
                        <li key={term}
                            onClick={() => onlabelClicked(term)}
                        >{term}</li>
                    ))
                }
            </ul>
        </div>
    )
}