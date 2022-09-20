interface FeaturesProps {
  features: {
    title?: string;
    description?: string;
    icon?: React.ReactNode | any;
  }[];
}

export default function Features({ features }: FeaturesProps) {
  return (
    <div className="grid auto-cols-max grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
      {features.map((feature, i) => (
        <div className="text-center" key={i}>
          <div className="flex justify-center mb-6">
            <div className="w-10">{feature.icon}</div>
          </div>
          <div className="font-bold mb-4">{feature.title}</div>
          <div>{feature.description}</div>
        </div>
      ))}
    </div>
  );
}
