import styles from "./timelineSection.module.css";

export default function TimelineSection({ events }) {
    return (
        <section className={styles.timelineSection}>
            <h2 className={styles.timelineTitle}>Momentos Épicos</h2>
            <div className={styles.timeline}>
            {events.map((event) => (
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineIcon}>{event.emoji}</div>
                        <div className={styles.timelineContent}>
                            <h3 className={styles.timelineItemTitle}>{event.title}</h3>
                            <p className={styles.timelineItemDescription}>{event.description}</p>
                        </div>
                    </div>
            ))}
            </div>
        </section>
    )
}