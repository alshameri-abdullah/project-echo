const colors = {
  kind: {
    border: 'border-green-600',
    text: 'text-green-600',
    barBg: 'bg-green-600',
    barEdge: 'bg-green-600',
    barFace: 'bg-green-500',
  },
  mean: {
    border: 'border-red-500',
    text: 'text-red-600',
    barBg: 'bg-red-600',
    barEdge: 'bg-red-600',
    barFace: 'bg-red-500',
  },
  neutral: {
    border: 'border-stone-500',
    text: 'text-stone-500',
    barBg: 'bg-stone-300',
    barEdge: 'bg-stone-400',
    barFace: 'bg-stone-300',
  },
};

export function useInteractionColors() {
  const getColor = (type) => colors[type] ?? colors.neutral;
  return { colors, getColor };
}
