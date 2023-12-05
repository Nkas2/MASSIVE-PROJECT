export function modify(data) {
  const AntiHemophilicFactorAmin = data.find(
    (d) => d.type === "Anti Hemophilic Factor" && d.golongan_darah === "A-"
  );
  const AntiHemophilicFactorAplus = data.find(
    (d) => d.type === "Anti Hemophilic Factor" && d.golongan_darah === "A+"
  );

  const FreshFrozenPlasmaAmin = data.find(
    (d) => d.type === "Fresh Frozen Plasma" && d.golongan_darah === "A-"
  );
  const FreshFrozenPlasmaAplus = data.find(
    (d) => d.type === "Fresh Frozen Plasma" && d.golongan_darah === "A+"
  );

  const PackedRedCellLeukoReduceAmin = data.find(
    (d) =>
      d.type === "Packed Red Cell Leuko Reduce" && d.golongan_darah === "A-"
  );
  const PackedRedCellLeukoReduceAplus = data.find(
    (d) =>
      d.type === "Packed Red Cell Leuko Reduce" && d.golongan_darah === "A+"
  );

  const PackedRedCellAmin = data.find(
    (d) => d.type === "Packed Red Cell" && d.golongan_darah === "A-"
  );
  const PackedRedCellAplus = data.find(
    (d) => d.type === "Packed Red Cell" && d.golongan_darah === "A+"
  );

  const ThrombocyteConcentrateAmin = data.find(
    (d) => d.type === "Thrombocyte Concentrate" && d.golongan_darah === "A-"
  );
  const ThrombocyteConcentrateAplus = data.find(
    (d) => d.type === "Thrombocyte Concentrate" && d.golongan_darah === "A+"
  );
  const AntiHemophilicFactorABplus = data.find(
    (d) => d.type === "Anti Hemophilic Factor" && d.golongan_darah === "AB+"
  );
  const AntiHemophilicFactorABmin = data.find(
    (d) => d.type === "Anti Hemophilic Factor" && d.golongan_darah === "AB-"
  );

  const FreshFrozenPlasmaABplus = data.find(
    (d) => d.type === "Fresh Frozen Plasma" && d.golongan_darah === "AB+"
  );
  const FreshFrozenPlasmaABmin = data.find(
    (d) => d.type === "Fresh Frozen Plasma" && d.golongan_darah === "AB-"
  );

  const PackedRedCellLeukoReduceABplus = data.find(
    (d) =>
      d.type === "Packed Red Cell Leuko Reduce" && d.golongan_darah === "AB+"
  );
  const PackedRedCellLeukoReduceABmin = data.find(
    (d) =>
      d.type === "Packed Red Cell Leuko Reduce" && d.golongan_darah === "AB-"
  );

  const PackedRedCellABplus = data.find(
    (d) => d.type === "Packed Red Cell" && d.golongan_darah === "AB+"
  );
  const PackedRedCellABmin = data.find(
    (d) => d.type === "Packed Red Cell" && d.golongan_darah === "AB-"
  );

  const ThrombocyteConcentrateABplus = data.find(
    (d) => d.type === "Thrombocyte Concentrate" && d.golongan_darah === "AB+"
  );
  const ThrombocyteConcentrateABmin = data.find(
    (d) => d.type === "Thrombocyte Concentrate" && d.golongan_darah === "AB-"
  );

  const AntiHemophilicFactorBplus = data.find(
    (d) => d.type === "Anti Hemophilic Factor" && d.golongan_darah === "B+"
  );
  const AntiHemophilicFactorBmin = data.find(
    (d) => d.type === "Anti Hemophilic Factor" && d.golongan_darah === "B-"
  );

  const FreshFrozenPlasmaBplus = data.find(
    (d) => d.type === "Fresh Frozen Plasma" && d.golongan_darah === "B+"
  );
  const FreshFrozenPlasmaBmin = data.find(
    (d) => d.type === "Fresh Frozen Plasma" && d.golongan_darah === "B-"
  );

  const PackedRedCellLeukoReduceBplus = data.find(
    (d) =>
      d.type === "Packed Red Cell Leuko Reduce" && d.golongan_darah === "B+"
  );
  const PackedRedCellLeukoReduceBmin = data.find(
    (d) =>
      d.type === "Packed Red Cell Leuko Reduce" && d.golongan_darah === "B-"
  );

  const PackedRedCellBplus = data.find(
    (d) => d.type === "Packed Red Cell" && d.golongan_darah === "B+"
  );
  const PackedRedCellBmin = data.find(
    (d) => d.type === "Packed Red Cell" && d.golongan_darah === "B-"
  );

  const ThrombocyteConcentrateBplus = data.find(
    (d) => d.type === "Thrombocyte Concentrate" && d.golongan_darah === "B+"
  );
  const ThrombocyteConcentrateBmin = data.find(
    (d) => d.type === "Thrombocyte Concentrate" && d.golongan_darah === "B-"
  );

  const AntiHemophilicFactorOplus = data.find(
    (d) => d.type === "Anti Hemophilic Factor" && d.golongan_darah === "O+"
  );
  const AntiHemophilicFactorOmin = data.find(
    (d) => d.type === "Anti Hemophilic Factor" && d.golongan_darah === "O-"
  );

  const FreshFrozenPlasmaOplus = data.find(
    (d) => d.type === "Fresh Frozen Plasma" && d.golongan_darah === "O+"
  );
  const FreshFrozenPlasmaOmin = data.find(
    (d) => d.type === "Fresh Frozen Plasma" && d.golongan_darah === "O-"
  );

  const PackedRedCellLeukoReduceOplus = data.find(
    (d) =>
      d.type === "Packed Red Cell Leuko Reduce" && d.golongan_darah === "O+"
  );

  const PackedRedCellLeukoReduceOmin = data.find(
    (d) =>
      d.type === "Packed Red Cell Leuko Reduce" && d.golongan_darah === "O-"
  );
  const PackedRedCellOplus = data.find(
    (d) => d.type === "Packed Red Cell" && d.golongan_darah === "O+"
  );
  const PackedRedCellOmin = data.find(
    (d) => d.type === "Packed Red Cell" && d.golongan_darah === "O-"
  );
  const ThrombocyteConcentrateOplus = data.find(
    (d) => d.type === "Thrombocyte Concentrate" && d.golongan_darah === "O+"
  );
  const ThrombocyteConcentrateOmin = data.find(
    (d) => d.type === "Thrombocyte Concentrate" && d.golongan_darah === "O-"
  );

  if (!AntiHemophilicFactorAmin) {
    data.push({
      type: "Anti Hemophilic Factor",
      alias: "AHF",
      golongan_darah: "A-",
      total_stok: 0,
    });
  }

  if (!AntiHemophilicFactorAplus) {
    data.push({
      type: "Anti Hemophilic Factor",
      alias: "AHF",
      golongan_darah: "A+",
      total_stok: 0,
    });
  }

  if (!FreshFrozenPlasmaAmin) {
    data.push({
      type: "Fresh Frozen Plasma",
      alias: "FFP",
      golongan_darah: "A-",
      total_stok: 0,
    });
  }

  if (!FreshFrozenPlasmaAplus) {
    data.push({
      type: "Fresh Frozen Plasma",
      alias: "FFP",
      golongan_darah: "A+",
      total_stok: 0,
    });
  }

  if (!PackedRedCellLeukoReduceAmin) {
    data.push({
      type: "Packed Red Cell Leuko Reduce",
      alias: "PRC Leukocyte Reduce",
      golongan_darah: "A-",
      total_stok: 0,
    });
  }

  if (!PackedRedCellLeukoReduceAplus) {
    data.push({
      type: "Packed Red Cell Leuko Reduce",
      alias: "PRC Leukocyte Reduce",
      golongan_darah: "A+",
      total_stok: 0,
    });
  }

  if (!PackedRedCellAmin) {
    data.push({
      type: "Packed Red Cell",
      alias: "PRC",
      golongan_darah: "A-",
      total_stok: 0,
    });
  }

  if (!PackedRedCellAplus) {
    data.push({
      type: "Packed Red Cell",
      alias: "PRC",
      golongan_darah: "A+",
      total_stok: 0,
    });
  }

  if (!ThrombocyteConcentrateAmin) {
    data.push({
      type: "Thrombocyte Concentrate",
      alias: "TC",
      golongan_darah: "A-",
      total_stok: 0,
    });
  }

  if (!ThrombocyteConcentrateAplus) {
    data.push({
      type: "Thrombocyte Concentrate",
      alias: "TC",
      golongan_darah: "A+",
      total_stok: 0,
    });
  }

  if (!AntiHemophilicFactorABplus) {
    data.push({
      type: "Anti Hemophilic Factor",
      alias: "AHF",
      golongan_darah: "AB+",
      total_stok: 0,
    });
  }

  if (!AntiHemophilicFactorABmin) {
    data.push({
      type: "Anti Hemophilic Factor",
      alias: "AHF",
      golongan_darah: "AB-",
      total_stok: 0,
    });
  }

  if (!FreshFrozenPlasmaABplus) {
    data.push({
      type: "Fresh Frozen Plasma",
      alias: "FFP",
      golongan_darah: "AB+",
      total_stok: 0,
    });
  }

  if (!FreshFrozenPlasmaABmin) {
    data.push({
      type: "Fresh Frozen Plasma",
      alias: "FFP",
      golongan_darah: "AB-",
      total_stok: 0,
    });
  }

  if (!PackedRedCellLeukoReduceABplus) {
    data.push({
      type: "Packed Red Cell Leuko Reduce",
      alias: "PRC Leukocyte Reduce",
      golongan_darah: "AB+",
      total_stok: 0,
    });
  }

  if (!PackedRedCellLeukoReduceABmin) {
    data.push({
      type: "Packed Red Cell Leuko Reduce",
      alias: "PRC Leukocyte Reduce",
      golongan_darah: "AB-",
      total_stok: 0,
    });
  }

  if (!PackedRedCellABplus) {
    data.push({
      type: "Packed Red Cell",
      alias: "PRC",
      golongan_darah: "AB+",
      total_stok: 0,
    });
  }

  if (!PackedRedCellABmin) {
    data.push({
      type: "Packed Red Cell",
      alias: "PRC",
      golongan_darah: "AB-",
      total_stok: 0,
    });
  }

  if (!ThrombocyteConcentrateABplus) {
    data.push({
      type: "Thrombocyte Concentrate",
      alias: "TC",
      golongan_darah: "AB+",
      total_stok: 0,
    });
  }

  if (!ThrombocyteConcentrateABmin) {
    data.push({
      type: "Thrombocyte Concentrate",
      alias: "TC",
      golongan_darah: "AB-",
      total_stok: 0,
    });
  }

  if (!AntiHemophilicFactorBplus) {
    data.push({
      type: "Anti Hemophilic Factor",
      alias: "AHF",
      golongan_darah: "B+",
      total_stok: 0,
    });
  }

  if (!AntiHemophilicFactorBmin) {
    data.push({
      type: "Anti Hemophilic Factor",
      alias: "AHF",
      golongan_darah: "B-",
      total_stok: 0,
    });
  }

  if (!FreshFrozenPlasmaBplus) {
    data.push({
      type: "Fresh Frozen Plasma",
      alias: "FFP",
      golongan_darah: "B+",
      total_stok: 0,
    });
  }

  if (!FreshFrozenPlasmaBmin) {
    data.push({
      type: "Fresh Frozen Plasma",
      alias: "FFP",
      golongan_darah: "B-",
      total_stok: 0,
    });
  }

  if (!PackedRedCellLeukoReduceBplus) {
    data.push({
      type: "Packed Red Cell Leuko Reduce",
      alias: "PRC Leukocyte Reduce",
      golongan_darah: "B+",
      total_stok: 0,
    });
  }

  if (!PackedRedCellLeukoReduceBmin) {
    data.push({
      type: "Packed Red Cell Leuko Reduce",
      alias: "PRC Leukocyte Reduce",
      golongan_darah: "B-",
      total_stok: 0,
    });
  }

  if (!PackedRedCellBplus) {
    data.push({
      type: "Packed Red Cell",
      alias: "PRC",
      golongan_darah: "B+",
      total_stok: 0,
    });
  }

  if (!PackedRedCellBmin) {
    data.push({
      type: "Packed Red Cell",
      alias: "PRC",
      golongan_darah: "B-",
      total_stok: 0,
    });
  }

  if (!ThrombocyteConcentrateBplus) {
    data.push({
      type: "Thrombocyte Concentrate",
      alias: "TC",
      golongan_darah: "B+",
      total_stok: 0,
    });
  }

  if (!ThrombocyteConcentrateBmin) {
    data.push({
      type: "Thrombocyte Concentrate",
      alias: "TC",
      golongan_darah: "B-",
      total_stok: 0,
    });
  }

  if (!AntiHemophilicFactorOplus) {
    data.push({
      type: "Anti Hemophilic Factor",
      alias: "AHF",
      golongan_darah: "O+",
      total_stok: 0,
    });
  }

  if (!AntiHemophilicFactorOmin) {
    data.push({
      type: "Anti Hemophilic Factor",
      alias: "AHF",
      golongan_darah: "O-",
      total_stok: 0,
    });
  }

  if (!FreshFrozenPlasmaOplus) {
    data.push({
      type: "Fresh Frozen Plasma",
      alias: "FFP",
      golongan_darah: "O+",
      total_stok: 0,
    });
  }

  if (!FreshFrozenPlasmaOmin) {
    data.push({
      type: "Fresh Frozen Plasma",
      alias: "FFP",
      golongan_darah: "O-",
      total_stok: 0,
    });
  }

  if (!PackedRedCellLeukoReduceOplus) {
    data.push({
      type: "Packed Red Cell Leuko Reduce",
      alias: "PRC Leukocyte Reduce",
      golongan_darah: "O+",
      total_stok: 0,
    });
  }

  if (!PackedRedCellLeukoReduceOmin) {
    data.push({
      type: "Packed Red Cell Leuko Reduce",
      alias: "PRC Leukocyte Reduce",
      golongan_darah: "O-",
      total_stok: 0,
    });
  }

  if (!PackedRedCellOplus) {
    data.push({
      type: "Packed Red Cell",
      alias: "PRC",
      golongan_darah: "O+",
      total_stok: 0,
    });
  }

  if (!PackedRedCellOmin) {
    data.push({
      type: "Packed Red Cell",
      alias: "PRC",
      golongan_darah: "O-",
      total_stok: 0,
    });
  }

  if (!ThrombocyteConcentrateOplus) {
    data.push({
      type: "Thrombocyte Concentrate",
      alias: "TC",
      golongan_darah: "O+",
      total_stok: 0,
    });
  }

  if (!ThrombocyteConcentrateOplus) {
    data.push({
      type: "Thrombocyte Concentrate",
      alias: "TC",
      golongan_darah: "O-",
      total_stok: 0,
    });
  }

  return data;
}
