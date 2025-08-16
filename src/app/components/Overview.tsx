import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

interface Topic {
  title: string;
  info: string;
}

interface OverviewProps {
  topics: Topic[];
}

const Overview = ({ topics }: OverviewProps) => {
  

  return (
    <div className="flex min-w-screen flex-col items-center bg-[#101827] text-white pb-10">
      <h1 className="mb-20 text-5xl font-extrabold tracking-tight mt-15">Overview</h1>
      <VerticalTimeline>
        {topics.map(({ title, info }, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            icon={
              <div className="flex h-full w-full items-center justify-center">
                <img
                  src={`/${title}.png`}
                  className="h-[55%] w-[55%] object-contain"
                />
              </div>
            }
            iconStyle={{ background: "#fff" }}
            contentStyle={{
              background: "#1f2937",
              boxShadow: "0 15px 25px rgba(0,0,0,0.1)",
            }}
            intersectionObserverProps={{
              triggerOnce: false,
              threshold: 0.1,
            }}
            contentArrowStyle={{ border: "#1f2937" }}
          >
            <h1 className="vertical-timeline-element-title text-lg font-extrabold">
              {title}
            </h1>
            <h4 className="vertical-timeline-element-subtitle text-sm tracking-tight text-[#9CA3AF]">
              {info}
            </h4>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Overview;
