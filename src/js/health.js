export default function getHealth(status) {
  if (status.health > 50) {
    return 'healthy';
  }
  if (status.health < 15) {
    return 'critical';
  }
  return 'wounded';
}
