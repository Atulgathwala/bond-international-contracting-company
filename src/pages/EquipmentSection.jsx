let bulldozer = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_300/kzehge0neflzoyuthetd.png";
let crane = "https://res.cloudinary.com/dasa3kzyf/image/upload/v1776703272/ekbmllr0fua2uksr4ovj.png";
let grader = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_300/tyvcd17waeq0h6geyk7f.png";
let dumptruck = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_300/r7vz2kgnw7g3pyy7teig.png";
let excavator = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_300/mhwmvxgfsr1t9qocika9.png";
let wheelloader = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_300/qyfjfdnwujlaejrjgaeh.png";
let jcb = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_300/r8chbhgwhzheay5pvrbo.png";
let trailer = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_300/a1d08iciso6yk5vaz9b3.png";
let boomtruck = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_300/btw9q2va2ouc6ccuo6by.png";
let bobcat = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_300/nrbrq31mewuhvtuy6x7f.png";
let tanker = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_300/t6adn6iitqmi1enknkca.png";
let bus = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_300/w5k0u0wsnubjx7lnv1ck.png";
let forklift = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_300/pozgnf6qqvsq3gjtxur2.png";
let telehandler = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_300/cpf8gwv76z4okw6epfai.png";
let scissor = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_300/kkrpu5f884ila8wd3idk.png";
let generator = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_300/fipyn3agllcmzcbb89zp.png";
let manlift = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_300/mbgeibfqfwpgbzcvic7f.png";
let compressor = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_300/czdltqnrxxox13rpatbx.png";
let minibus = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_300/cnp0zq0tmdbdlj8dxgdb.png";
let car = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_300/cfmromurkzvjitah6cpt.png";

const equipmentData = [
  { name: "Bulldozer", img: bulldozer },
  { name: "Crane", img: crane },
  { name: "Dump Truck", img: dumptruck },
  { name: "Grader", img: grader },
  { name: "Excavator", img: excavator },
  { name: "Wheel Loader", img: wheelloader },
  { name: "JCB", img: jcb },
  { name: "Trailer Flat Bed", img: trailer },
  { name: "Boom Truck", img: boomtruck },
  { name: "Bobcat", img: bobcat },
  { name: "Diesel Tanker", img: tanker },
  { name: "Bus", img: bus },
  { name: "Fork Lift", img: forklift },
  { name: "Telehandler", img: telehandler },
  { name: "Scissor Lift", img: scissor },
  { name: "Generator", img: generator },
  { name: "Man Lift", img: manlift },
  { name: "Air Compressor", img: compressor },
  { name: "Mini Bus", img: minibus },

  { name: "Car", img: car },
];

const EquipmentSection = () => {
  return (
    <section id="equipment" className="py-16 bg-gray-50">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#172E64]">
          Our Equipment Fleet
        </h2>
        <p className="text-gray-600 mt-3">
          Reliable and modern machinery for every project need
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        
        {equipmentData.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition duration-300 text-center group"
          >
            
            {/* Image */}
            <img
              src={item.img}
              alt={item.name}
              className="h-20 mx-auto object-contain group-hover:scale-110 transition duration-300"
            />

            {/* Name */}
            <p className="mt-3 text-sm font-medium text-[#172E64]">
              {item.name}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
};

export default EquipmentSection;