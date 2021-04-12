import LibraryImage from "./Images/library_hidef.PNG";
import OppressiveCityImage from "./Images/oppressive_city_hidef.PNG";
import BlurredUnblurredScreenshotImage from "./Images/blurred_unblurred_hidef.PNG";
import PhysicalizedInterfaceImage from "./Images/physicalized_interface_hidef.PNG";
import CityDemoImage from "./Images/city_demo_hidef.PNG";

const experiments = [
  {
    key: "Virtual Library",
    header: "Virtual Library",
    subtext: "",
    image: LibraryImage,
    description:
      "The virtual library was created to test how people would interact in a 'grand' vs a more plain environment. Participants had to sort physicalized books using vr controllers, which could be altered in real time by the experimenter.",
  },
  {
    key: "Oppressive City",
    header: "Oppressive City",
    subtext: "",
    image: OppressiveCityImage,
    description:
      "Various cities of varying degrees of oppressiveness were created to study the impact of the environment on stress and various biometric measures, and were also compared to equivalent natural environments.",
  },
  {
    key: "Blurred + Unblurred Walk",
    header: "Blurred Unblurred Screenshots",
    subtext: "",
    image: BlurredUnblurredScreenshotImage,
    description:
      "Not all environments would be walked through by participants - in certain situations, pre-rendered video would be captured along with various modifications in order to get specific reactions.",
  },
  {
    key: "Physicalized Interface",
    header: "Physicalized Interface",
    subtext: "",
    image: PhysicalizedInterfaceImage,
    description:
      "Many people taking part in studies weren't very familiar with technology in general, so interfaces that felt natural to use in VR were created and tested.",
  },
  {
    key: "City Demo",
    header: "City Demo",
    subtext: "",
    image: CityDemoImage,
    description:
      "Various cities with differing layouts were created in order to test how people would pathfind with different levels of visual complexity.",
  },
];

export default experiments;
