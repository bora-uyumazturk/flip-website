import React, { MouseEvent } from "react";

import PublicationCard from "./PublicationCard";

const publications = [
  {
    title:
      "Impact of a deep learning assistant on the histopathological classification of liver cancer",
    abstract:
      "In this paper, we developed a deep learning assistant for distinguishing between subtypes of primary liver carcinoma and evaluated it in a retrospective cross-over study involving eleven pathologists of different specialties and experience levels. We found that, despite the model itself having high accuracy on an independent test set, only nine of eleven pathologists experienced an improvement in accuracy (in fact, two pathologists performed worse). We found that pathologists on average performed four times better (in terms of odds ratio) when the model provided the correct diagnosis than without the model. However, when the model provided the wrong diagnosis, they performed about a third as well as when they were on their own. These results suggest the potential presence of automation bias. We conclude that future research should explore effect of various design decisions on joint human-AI performance of deep learning-based diagnostic support systems.",
  },
  {
    title:
      "Consequences of Social Risk in Small and Moderately Sized Deliberative Democracies",
    abstract:
      "In this paper, analyzed the voting behavior of individuals participating in public, consensus voting schemes from a game theoretic perspective. We presented a model of public voting incorporating social pressures and proved the existence of an equilibrium in which truthfulness of votes decays as number of individuals increases in consensus voting. We then compared qualitative predictions from model with empirical evidence from a community at Stanford which implements consensus voting. Our findings suggest that instead of acting as a vehicle for change, public consensus voting may in fact reinforce status quo.",
  },
];

const Publications = () => {
  return (
    <div className="h-full w-full flex flex-col space-y-4 overflow-auto pr-4">
      <div>Publications</div>
      {publications.map((p) => {
        return <PublicationCard title={p.title} abstract={p.abstract} />;
      })}
    </div>
  );
};

export default Publications;
