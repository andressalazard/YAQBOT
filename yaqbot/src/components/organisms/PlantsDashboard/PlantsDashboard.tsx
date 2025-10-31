import React, { useState } from 'react';
import { retrievedPlant } from '../../../models/dataModel';
import styles from './PlantsDashboard.module.css';
import Pagination from '../../molecules/Pagination/Pagination';
import PlantCard from '../../molecules/PlantCard/PlantCard';

interface PlantsDashboardProps {
  ownedPlants: retrievedPlant[];
  plantsToShow?: number;
}

const PlantsDashboard: React.FC<PlantsDashboardProps> = ({ ownedPlants, plantsToShow = 3 }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const totalPlants = ownedPlants.length;

  const start = (currentIndex - 1) * plantsToShow;
  const end = start + plantsToShow;
  const visiblePlants = ownedPlants.slice(start, end);
  const totalGroups = Math.ceil(totalPlants / plantsToShow);

  return (
    <div className={styles.dashboard}>
      <section className={styles.plantsCollection}>
        {visiblePlants.map((plant, index) => (
          <PlantCard key={index} data={plant} />
        ))}
      </section>
      {totalGroups > 1 && (
        <Pagination
          totalPages={totalGroups}
          currentPage={currentIndex}
          onPageChange={setCurrentIndex}
        />
      )}
    </div>
  );
};

export default PlantsDashboard;
