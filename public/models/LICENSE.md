# Concept Car 037

## Toyota Corolla hero model

`corolla-2014.glb` and `corolla-2014-mobile.glb` are optimized versions of **"2014 Toyota Corolla E180 EU (with interior)" by Armored Wave**: https://sketchfab.com/3d-models/2014-toyota-corolla-e180-eu-with-interior-36f95efb0585464cae43a25a3b3392e8

Original author: https://sketchfab.com/armoredwave

License: Creative Commons Attribution 4.0: https://creativecommons.org/licenses/by/4.0/

Changes: converted the original glTF to self-contained GLB, simplified and Draco-compressed mesh data, resized and WebP-compressed textures to 1024 px for desktop and 512 px for mobile, and changed the paint material to pearl white at runtime. The model is used only in the hero. This is an E180-generation Corolla matching the supplied sedan reference, not a manufacturer CAD model.

---

## Honda Civic Mechanic on Wheels model

`civic-2016.glb` and `civic-2016-mobile.glb` are optimized versions of **"Honda civic" by Aldios**: https://sketchfab.com/3d-models/honda-civic-ff844e296f214e709c0d0691d031c68b

Original author: https://sketchfab.com/Aldios

License: Creative Commons Attribution 4.0: https://creativecommons.org/licenses/by/4.0/

Changes: converted the source glTF to a self-contained GLB, simplified and Draco-compressed the geometry, normalized the source CAD-scale coordinates at runtime, and applied a dark pearl-black paint material. The model is used only in the Mechanic on Wheels road scene and remains interactive.

---

Recommended file: concept-car-037-draco.glb (1.02 MB)
Original retained: concept-car-037.glb (7.21 MB)

Creator: Unity Fan youtube channel / unityfan777
Primary source: https://sketchfab.com/3d-models/free-concept-car-037-public-domain-cc0-646a3a31b0224379b6e767abc34d58dd
Download mirror: https://github.com/Vivekkk-1/3D-Models/blob/main/Cars/free_concept_car_037_-_public_domain_cc0.glb

Rights: Creator explicitly dedicates this model AND design to the public domain (CC0) in the original model description, and allows anyone to use it for anything without attribution. Sketchfab generated metadata separately labels it Standard, but the creator's direct dedication is explicit. Recommended courtesy credit: Concept Car 037 by Unity Fan (CC0).

Processed with glTF Transform 4.5.0 Draco command; no geometry simplification or visual/material editing applied.

Integration:
- GLTFLoader plus DRACOLoader required for compressed file.
- Includes clearcoat, specular, transmission extensions supported by Three.js.
- 198,292 triangles, 134,295 upload vertices, 2 small embedded JPEG normal maps. No animations.
- World bounds minimum (-0.91827, -0.00759, -4.3628), maximum (0.91836, 1.05703, 0.46918). Y-up. Width 1.84, height 1.06, length 4.83 units along Z. Center at approximately (0,0.525,-1.947).
- Center model before camera framing: Box3.setFromObject(scene), subtract its center, then position vertically to put minY on floor.
- Body material is named body_color_supra.001; starts pure black. Can assign MeshPhysicalMaterial with desired silver paint, metalness .8, roughness .25, clearcoat 1. Environment/reflection lighting essential.
- Other materials: chrome, plasticBlur, headlightCovers, plasticMatte, blockers, rims.001, rubber___tires.001, tireProtector, brakeCalipers, metal_1.001.

Also downloaded ferrari.glb from Three.js as an unused alternative. Its original Sketchfab source currently returns 404; secondary sources state CC BY 4.0, but primary license could not be verified. Prefer this rights-verified Concept Car asset.

Mobile variant: concept-car-037-mobile.glb; 744,640 bytes; 68,292 triangles (65.6% reduction). Welded then simplified using ratio 0.32 and max error 0.003 of mesh radius. Draco compressed. Preserves all 14 materials and 2 textures. No transforms or material changes applied.

---

## Interactive service models

The following models are used for the service-card 3D viewer. Each source is licensed under Creative Commons Attribution 4.0 and has been converted to a self-contained GLB with WebP-compressed textures and Draco-compressed geometry.

| Local asset | Source model and author | Source |
| --- | --- | --- |
| `service-engine.glb` | **Car Engine** by Davetheconqueror | https://sketchfab.com/3d-models/car-engine-c85c6c4fbf9e43cf8a71d2280a841d29 |
| `service-engine-work.glb` | **Disassembled V8 Engine Block** by Tomaso | https://sketchfab.com/3d-models/disassembled-v8-engine-block-3026bd87ca3945d6829d24c86ce695f0 |
| `service-alternator.glb` | **Car alternator** by Ele.G | https://sketchfab.com/3d-models/car-alternator-c7ddcec7798349d5abcdb84002a64340 |
| `service-charger.glb` | **Car Battery Charger** by Ravindu Sandeepa | https://sketchfab.com/3d-models/car-battery-charger-3b797c8da4ca4d89aa15441727210bc4 |
| `service-brake.glb` | **FREE - Brake Caliper Brembo** by Unity Fan youtube channel | https://sketchfab.com/3d-models/free-brake-caliper-brembo-39980ecb6a474ba38b1cf8e7df411a56 |
| `service-strut.glb` | **MACHPERSON SUSPENSION (STRUD)** by VR DESIGNER | https://sketchfab.com/3d-models/macpherson-suspension-strud-bd202ee134454402bf398ca906c8e2f5 |
| `service-diagnostics.glb` | **Digital Multi-meter** by danish_blends | https://sketchfab.com/3d-models/digital-multi-meter-248dd1c8a2194f8c8ff8c52a8fb1d927 |
| `service-oil-filter.glb` | **Phram oil filter** by Johnathon Goswick | https://sketchfab.com/3d-models/phram-oil-filter-e8d79955943144baaa10336ac1e07624 |
| `service-toolbox.glb` | **Green toolbox** by shazammm | https://sketchfab.com/3d-models/green-toolbox-cc199e5cdf254f84afeb28552dc263fa |

Licence: https://creativecommons.org/licenses/by/4.0/
