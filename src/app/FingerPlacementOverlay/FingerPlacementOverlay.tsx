import { FC } from "react";
import { FretFingerPlacement } from "./FretFingerPlacement";
import "./FingerPlacementOverlay.scss";

export type FingerPlacementOverlayProps = Readonly<{
  positions: (number | null)[] | null;
  fingerings: number[] | null;
  numFrets: number;
}>;

export const FingerPlacementOverlay: FC<FingerPlacementOverlayProps> = ({
  positions,
  fingerings,
  numFrets,
}) => {
  const renderOverlay = () => {
    const result = [];
    for (let i = 0; i < numFrets; i++) {
      result.push(
        <FretFingerPlacement
          fretNumber={i + 1}
          positions={positions}
          fingerings={fingerings}
        />
      );
    }
    return result;
  };
  return <div className={"overlay"}>{renderOverlay()}</div>;
};
