import InfoCardLayout from "./InfoCardLayout";

const Publications = ({ front }: { front: boolean }) => {
  return (
    <InfoCardLayout
      title="📃 Publications"
      entryList={publications}
      front={front}
    />
  );
};

const publications = [
  {
    title:
      "Impact of a Deep Learning Assistant on the Histopathological Classification of Liver Cancer",
    abstract:
      "In this paper, we developed a deep learning assistant for distinguishing between subtypes of primary liver carcinoma and evaluated it in a retrospective cross-over study involving eleven pathologists of different specialties and experience levels. We found that, despite the model itself having high accuracy on an independent test set, only nine of eleven pathologists experienced an improvement in accuracy (in fact, two pathologists performed worse). We found that pathologists on average performed four times better (in terms of odds ratio) when the model provided the correct diagnosis than without the model. However, when the model provided the wrong diagnosis, they performed about a third as well as when they were on their own. These results suggest the potential presence of automation bias. We conclude that future research should explore effect of various design decisions on joint human-AI performance of deep learning-based diagnostic support systems.",
    links: [
      {
        link: "https://www.nature.com/articles/s41746-020-0232-8",
        linkName: "paper",
      },
      {
        link: "https://arxiv.org/abs/1911.07372",
        linkName: "extended abstract",
      },

      {
        link: "https://github.com/stanfordmlgroup/lca-code",
        linkName: "code",
      },
    ],
  },
  {
    title:
      "Consequences of Social Risk in Small and Moderately Sized Deliberative Democracies",
    abstract:
      "The goal of this paper was to analyze the voting behavior of individuals participating in public, consensus voting schemes from a game theoretic perspective. We presented a model of public voting incorporating social pressures and proved the existence of an equilibrium in which truthfulness of votes decays as number of individuals increases in consensus voting. We then compared qualitative predictions from model with empirical evidence from a community at Stanford which implements consensus voting. Our findings suggest that instead of acting as a vehicle for change, public consensus voting may in fact reinforce status quo.",
    links: [
      {
        link: "https://bora-uyumazturk.github.io/assets/majority_minority.pdf",
        linkName: "paper",
      },
    ],
  },
];

export default Publications;
